import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password ?? "";

        // cek user di DB (Cloudflare D1)
        const res = await fetch(
          `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sql: `SELECT * FROM user WHERE email = ? LIMIT 1`,
              params: [email],
            }),
          }
        );

        const data = await res.json();
        const user = data?.result?.[0]?.results?.[0];

        if (!user) return null;

        // validasi password
        if(!credentials?.password) return null;

        const isValid = await bcrypt.compare(password as string, user.password_hash);
        if (!isValid) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user }) {
      try {
        // cek ke D1
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });
      } catch (e) {
        console.error("Gagal insert ke D1:", e);
      }
      return true; // return false kalau mau tolak login
    },
    async jwt({ token, account }) {
      // account hanya ada saat login pertama
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.provider) {
        (session as any).provider = token.provider;
      }
      return session;
    },
  },
});

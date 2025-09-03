"use server";

export async function signupAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // panggil API D1 langsung untuk cek user + insert
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    if (!res.ok || data.error) {
      return { error: data.error || "Email sudah terpakai." };
    }

    return { success: true };
  } catch (err) {
    return { error: err.message };
  }
}

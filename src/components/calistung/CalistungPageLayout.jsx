// src/components/calistung/CalistungPageLayout.jsx

export default function CalistungPageLayout({ title, children }) {
  return (
    <main className="bg-[#FEFDF9] mt-[68px]">
      <section className="bg-[#FBF6F2] py-14 sm:py-28 relative overflow-hidden">
        <div className="hidden sm:block absolute -bottom-16 -left-16 opacity-30 pointer-events-none rotate-30 -translate-x-60 translate-y-35">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-110 h-110 object-contain"
          />
        </div>
        <div className="absolute -bottom-16 -right-16 opacity-30 pointer-events-none rotate-30 translate-x-15 sm:translate-x-35 translate-y-10 sm:translate-y-40">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-60 sm:w-110 h:60 sm:h-110 object-contain"
          />
        </div>
        <div className="container relative z-10">
          <h1 className="font-bold text-2xl sm:text-4xl">{title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container">{children}</div>
      </section>
    </main>
  );
}

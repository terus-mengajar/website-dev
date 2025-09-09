export default function KatabaAI() {
  return (
    <section className="base-section bg-purple-100 py-18">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-karakter">
            Bingung mana yang cocok buat ananda?
          </h2>
          <a href="/kataba-ai" className="tombol-kataba-ai">🌟 Tanya KATABA AI</a>
        </div>

        <div className="lg:basis-5/10 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="/images/karakter/karakter-kertas.avif"
            alt=""
            className="w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

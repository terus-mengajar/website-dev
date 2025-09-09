export const metadata = {
  title: "Syarat dan Ketentuan",
};

export default function SyaratKetentuan() {
  return (
    <main className="mt-[68px] bg-[#fcfbf8] text-sm min-h-140">
      <section>
        <div className="container mx-auto px-6 py-14 text-gray-800 leading-relaxed">
          <h1 className="text-3xl font-bold mb-8">
            <span className="bg-[#fbf6f2] px-3 py-1 rounded-md">
              Credit & Attribution
            </span>
          </h1>

          <div className="border border-[#cbaf78] rounded-2xl px-8 py-5">
            <div className="mb-4 flex flex-row gap-4 items-center">
                <img className="w-14 mt-2" src="/images/icons/relume-icon.png" alt="relume-icon" />
                <span className="text-4xl font-bold">Relume</span>
            </div>
            <a href="https://relume.io" target="_blank" className="text-lg font-medium">Kunjungi Website &gt;</a>
          </div>

        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Syarat dan Ketentuan",
};

export default function SyaratKetentuan() {
  return (
    <main className="mt-[68px] bg-[#fcfbf8] text-sm">
      <section>
        <div className="container mx-auto px-6 py-14 text-gray-800 leading-relaxed">
          <h1 className="text-3xl font-bold mb-8">
            <span className="bg-[#fbf6f2] px-3 py-1 rounded-md text-[#ef9e00]">
              Syarat & Ketentuan
            </span>
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">Pernyataan Umum</h2>
            <p className="mb-2">Selamat datang di Terus Mengajar.</p>
            <p className="mb-2">
              Silahkan membaca dengan cermat syarat dan ketentuan penggunaan ini sebelum menggunakan situs web kami.
            </p>
            <p>
              Dengan mengakses atau menggunakan situs web ini, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan salah satu ketentuan ini, Anda tidak diperkenankan untuk menggunakan atau mengakses situs web ini.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Batasan Penggunaan Aset</h2>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">01. Aset Yang Dimiliki:</h3>
              <p className="ms-9">
                Aset yang disediakan dan dimiliki oleh Terus Mengajar termasuk, namun tidak terbatas pada, konten, gambar, video, dan materi lainnya yang terdapat di situs web ini.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">02. Pembatasan Penggunaan Aset:</h3>
              <p className="ms-9">
                Pengguna dilarang memperbanyak & menjual atau melakukan transaksi komersial terkait dengan aset yang dimiliki oleh Terus Mengajar tanpa izin tertulis dari pihak kami.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">03. Pengecualian:</h3>
              <p className="ms-9">
                Izin pengecualian untuk kegiatan perdagangan atau transaksi komersial dapat diminta secara tertulis dan akan dipertimbangkan berdasarkan kasus-kasus tertentu. Permintaan izin harus diajukan melalui{" "}
                <a
                  href="mailto:terusmengajar@gmail.com"
                  className="text-blue-600 underline"
                >
                  terusmengajar@gmail.com
                </a>{" "}
                 dan akan diproses sesuai kebijakan internal kami.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">Pelanggaran dan Sanksi</h2>
            <p>
              Pelanggaran terhadap ketentuan ini dapat mengakibatkan penghentian akses atau tindakan hukum sesuai dengan ketentuan hukum yang berlaku.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">
              Perubahan Pada Syarat & Ketentuan
            </h2>
            <p>
              Terus Mengajar berhak untuk mengubah atau memperbarui syarat dan ketentuan ini setiap saat tanpa pemberitahuan sebelumnya. Perubahan tersebut akan berlaku segera setelah diposting di situs web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang syarat dan ketentuan ini, silakan hubungi kami melalui{" "}
              <a
                href="mailto:terusmengajar@gmail.com"
                className="text-blue-600 underline"
              >
                terusmengajar@gmail.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

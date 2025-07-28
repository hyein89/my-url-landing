export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="p-4 bg-white shadow-sm flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600">QuickShort</h1>
        <nav className="space-x-6 text-sm text-gray-600 mt-2 md:mt-0">
          <a href="#features" className="hover:text-blue-500">Fitur</a>
          <a href="#about" className="hover:text-blue-500">Tentang</a>
          <a href="#contact" className="hover:text-blue-500">Kontak</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 py-16 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Perpendek URL Anda dengan Cepat
            </h2>
            <p className="mb-6 text-gray-700 text-base">
              Solusi terbaik untuk memperpendek link panjang menjadi singkat, mudah diingat, dan siap dibagikan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Tempelkan link di sini..."
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition">
                Perpendek
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <img src="/illustration.svg" alt="Illustration" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Fitur */}
      <section id="features" className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center md:text-left">
            Kenapa memilih QuickShort?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Mudah & Cepat", desc: "Hanya dengan satu klik, link panjang Anda langsung dipendekkan." },
              { title: "Tanpa Daftar", desc: "Gunakan layanan kami tanpa akun atau login." },
              { title: "Gratis Selamanya", desc: "Layanan pemendek URL ini sepenuhnya gratis." },
            ].map((item, i) => (
              <div key={i} className="p-6 border shadow-sm h-full">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="about" className="px-4 py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Tentang QuickShort</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            QuickShort adalah layanan pemendek tautan sederhana yang dirancang untuk semua pengguna
            yang ingin membagikan link secara praktis. Kami percaya bahwa kemudahan berbagi informasi
            dimulai dari link yang ringkas dan bersih.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t px-4 py-12 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-2">QuickShort</h4>
            <p>Pemendek URL cepat dan gratis untuk semua pengguna.</p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-2">Tentang</h4>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:underline">Fitur</a></li>
              <li><a href="#about" className="hover:underline">Cara Kerja</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-2">Kontak</h4>
            <ul className="space-y-1">
              <li>Email: support@quickshort.com</li>
              <li>Instagram: @quickshort</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-2">Lainnya</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-400">
          &copy; {new Date().getFullYear()} QuickShort. Dibuat dengan ❤️ untuk kemudahan berbagi.
        </div>
      </footer>
    </main>
  );
}

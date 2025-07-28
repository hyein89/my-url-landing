export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">QuickShort</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-sm text-gray-600 hover:text-blue-500">Fitur</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-blue-500">Tentang</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 text-center bg-gradient-to-br from-blue-100 to-blue-50">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Perpendek URL Anda dengan Cepat</h2>
        <p className="mb-8 text-gray-600 text-sm md:text-base">
          Solusi terbaik untuk memperpendek link panjang menjadi singkat, mudah diingat, dan siap dibagikan.
        </p>
        <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Tempelkan link di sini..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Perpendek
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 bg-white text-center">
        <h3 className="text-2xl font-bold mb-8">Kenapa memilih QuickShort?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Mudah & Cepat</h4>
            <p className="text-sm text-gray-600">Hanya dengan satu klik, link panjang Anda akan langsung dipendekkan.</p>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Tanpa Daftar</h4>
            <p className="text-sm text-gray-600">Gunakan layanan kami tanpa harus membuat akun.</p>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Gratis Selamanya</h4>
            <p className="text-sm text-gray-600">Layanan pemendek URL ini sepenuhnya gratis untuk digunakan kapan saja.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Tentang QuickShort</h3>
          <p className="text-gray-700 text-sm md:text-base">
            QuickShort adalah layanan pemendek tautan sederhana yang dirancang untuk semua pengguna yang ingin membagikan
            link secara praktis. Kami percaya bahwa kemudahan berbagi informasi dimulai dari link yang ringkas dan bersih.
            Kami mendukung berbagai perangkat dan platform, menjadikan QuickShort pilihan ideal untuk kebutuhan pribadi atau profesional.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} QuickShort. Dibuat dengan ❤️ untuk kemudahan berbagi.
      </footer>
    </main>
  );
}

// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">QuickShort</h1>
          <nav className="space-x-6 text-sm text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
            <a href="#features" className="hover:text-blue-500 transition">Fitur</a>
            <a href="#about" className="hover:text-blue-500 transition">Tentang</a>
            <a href="#contact" className="hover:text-blue-500 transition">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 transition-all">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Perpendek URL Anda dengan Cepat
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200 text-base">
              Solusi terbaik untuk memperpendek link panjang menjadi singkat, mudah diingat, dan siap dibagikan.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                required
                placeholder="Tempelkan link di sini..."
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition rounded-none"
              >
                Perpendek
              </button>
            </form>
          </div>
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <img src="/illustration.png" alt="Ilustrasi" className="w-full h-auto" />
          </div>
        </div>
      </section>

<section id="features" className="bg-white dark:bg-gray-900 px-4 py-20">
  <div className="max-w-6xl mx-auto">
    {/* Title Section */}
    <h3 className="text-2xl font-bold mb-2 text-center md:text-left">
      Kenapa memilih QuickShort?
    </h3>
    <p className="text-center md:text-left text-gray-600 dark:text-gray-300 mb-12">
      Layanan pemendek URL terbaik, cepat, gratis, dan tanpa perlu daftar akun.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: "/icons/icon-like.png",
                title: "Easy",
                desc: "ShortURL is easy and fast, enter the long link to get your shortened link.",
              },
              {
                icon: "/icons/icon-responsive.png",
                title: "Devicesr",
                desc: "Compatible with smartphones, tablets and desktop.",
              },
              {
                icon: "/icons/icon-secure.png",
                title: "Secure",
                desc: "It is fast and secure, our service has HTTPS protocol and data encryption.",
              },
              {
                icon: "/icons/icon-statistics.png",
                title: "Statistics",
                desc: "Check the number of clicks that your shortened URL received.",
              },
              {
                icon: "/icons/icon-unique.png",
                title: "Reliable",
                desc: "All links that try to disseminate spam, viruses and malware are deleted.",
              },
              {
                icon: "/icons/icon-url.png",
                title: "Shortened",
                desc: "Use any link, no matter what size, ShortURL always shortens.",
              },
      ].map((item, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:items-start sm:text-left text-center items-center gap-4 px-4 py-4"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="w-12 h-12"
            loading="lazy"
          />
          <div>
            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="about" className="px-4 py-20 bg-gray-100 dark:bg-gray-800 transition-colors">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Gambar */}
    <div>
      <img
        src="/about.svg" // Ganti sesuai file kamu
        alt="Tentang QuickShort"
        className="w-full h-auto rounded-lg shadow-md"
        loading="lazy"
      />
    </div>

    {/* Teks */}
    <div className="space-y-10">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          How Do URL Shortening Services Work?
        </h3>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          URL shortening services help you shorten long URLs into shorter, shareable ones. By simply entering a long URL, you will get a short link that can be shared easily. Take advantage of URL shortening to make the link appear cleaner and more attractive..
        </p>
      </div>
    </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Simple and fast URL shortener!
        </h3>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp,
          TikTok, blogs and any domain name. Just paste the long URL and click the Shorten URL button. On the next
          page, copy the shortened URL and share it on sites, chat and emails.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Shorten, share and track
        </h3>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          Your shortened URLs can be used in publications, documents, ads, blogs, and more. Track statistics for
          your business and projects by monitoring the number of hits with our click counter.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-4 py-12 text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">QuickShort</h4>
            <p>Pemendek URL cepat dan gratis untuk semua pengguna.</p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">Tentang</h4>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:underline">Fitur</a></li>
              <li><a href="#about" className="hover:underline">Cara Kerja</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">Kontak</h4>
            <ul className="space-y-1">
              <li><a href="mailto:support@quickshort.com" className="hover:underline">support@quickshort.com</a></li>
              <li><a href="https://instagram.com/quickshort" target="_blank" rel="noreferrer" className="hover:underline">@quickshort</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">Lainnya</h4>
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

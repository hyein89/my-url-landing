"use client";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors text-sm md:text-base">
      {/* Header */}
      <header className="p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">QuickShort</h1>
          <nav className="space-x-4 md:space-x-6 text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
            <a href="#features" className="hover:text-blue-500 transition">Fitur</a>
            <a href="#about" className="hover:text-blue-500 transition">Tentang</a>
            <a href="#contact" className="hover:text-blue-500 transition">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 transition-all">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-snug md:leading-tight">
              Perpendek URL Anda dengan Cepat
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200 text-sm md:text-base">
              Solusi terbaik untuk memperpendek link panjang menjadi singkat, mudah diingat, dan siap dibagikan.
            </p>
            <form
const [result, setResult] = useState("");
const [error, setError] = useState("");
const [copySuccess, setCopySuccess] = useState("");

<form
  className="flex flex-col sm:flex-row gap-4"
  onSubmit={async (e) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input") as HTMLInputElement;
    const longUrl = input.value;

    setResult("");
    setError("");
    setCopySuccess("");

    try {
      const res = await fetch("https://robhyr.xo.je/shorten.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: longUrl }),
      });

      const data = await res.json();
      if (data.short_url) {
        setResult(data.short_url);
        input.value = "";
      } else {
        setError(data.error || "Terjadi kesalahan saat mempersingkat URL.");
      }
    } catch (err) {
      setError("Gagal terhubung ke server.");
    }
  }}
>
  <input
    type="url"
    required
    placeholder="Tempelkan link di sini..."
    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
  />
  <button
    type="submit"
    className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition rounded-md"
  >
    Perpendek
  </button>
</form>

{/* Error Area */}
{error && (
  <p className="mt-3 text-red-500 dark:text-red-400">{error}</p>
)}

{/* Hasil & Copy Area */}
{result && (
  <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
    <a
      href={result}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-300 break-all underline"
    >
      {result}
    </a>
    <button
      onClick={() => {
        navigator.clipboard.writeText(result);
        setCopySuccess("Tersalin!");
        setTimeout(() => setCopySuccess(""), 2000);
      }}
      className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
    >
      Salin
    </button>
    {copySuccess && <span className="text-green-500 text-xs">{copySuccess}</span>}
  </div>
)}

            </form>
          </div>
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <img src="/illustration.png" alt="Ilustrasi" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white dark:bg-gray-900 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left">
            Want More? Try Premium Features!
          </h3>
          <p className="text-center md:text-left text-gray-600 dark:text-gray-300 mb-6">
            Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, app integrations and support
          </p>

          {/* Tombol Create Account */}
          <div className="flex justify-center md:justify-start mb-8">
            <a
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition-colors duration-200 rounded-md"
            >
              Create Account
            </a>
          </div>

          {/* Pemisah */}
          <hr className="border-gray-300 dark:border-gray-600 mb-10" />

          {/* Grid Fitur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["like", "responsive", "Secure", "Statistics", "unique", "url"].map((title, i) => (
              <div key={i} className="flex items-start gap-4 text-left">
                <img src={`/icons/icon-${title.toLowerCase()}.png`} alt={title} className="w-10 h-10" loading="lazy" />
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1">{title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {[
                      "ShortURL is easy and fast, enter the long link to get your shortened link.",
                      "Compatible with smartphones, tablets and desktop.",
                      "It is fast and secure, our service has HTTPS protocol and data encryption.",
                      "Check the number of clicks that your shortened URL received.",
                      "All links that try to disseminate spam, viruses and malware are deleted.",
                      "Use any link, no matter what size, ShortURL always shortens."
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-16 md:py-20 bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/about.svg"
              alt="Tentang QuickShort"
              className="w-full h-auto max-w-[500px]"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            {["How Do URL Shortening Services Work?", "Simple and fast URL shortener!", "Shorten, share and track"].map((title, i) => (
              <div key={i}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {[
                    "URL shortening services help you shorten long URLs into shorter, shareable ones. By simply entering a long URL, you will get a short link that can be shared easily.",
                    "ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and any domain name.",
                    "Your shortened URLs can be used in publications, documents, ads, blogs, and more. Track statistics for your business and projects by monitoring the number of hits with our click counter."
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-4 py-12 text-xs md:text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "QuickShort",
              content: "Shorten World is more than just the best free custom URL shortener, with a powerful Link Management Platform, advanced link tracking features"
            },
            {
              title: "Tentang",
              links: [
                { text: "Fitur", href: "#features" },
                { text: "Cara Kerja", href: "#about" }
              ]
            },
            {
              title: "Kontak",
              links: [
                { text: "support@quickshort.com", href: "mailto:support@quickshort.com" },
                { text: "@quickshort", href: "https://instagram.com/quickshort" }
              ]
            },
            {
              title: "Lainnya",
              links: [
                { text: "Privacy Policy", href: "#" },
                { text: "Terms of Service", href: "#" }
              ]
            }
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">{section.title}</h4>
              {section.content ? (
                <p>{section.content}</p>
              ) : (
                <ul className="space-y-1">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:underline">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10 text-gray-400">
          &copy; {new Date().getFullYear()} QuickShort. Dibuat dengan ❤️ untuk kemudahan berbagi.
        </div>
      </footer>
    </main>
  );
}

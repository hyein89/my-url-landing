/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Tambahkan ini untuk dukung dark mode manual
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ Tambahkan js/jsx agar aman
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ Tambahkan js/jsx
  ],
  theme: {
    extend: {
      // (opsional) Bisa tambahkan custom font, warna, dsb
    },
  },
  plugins: [],
};


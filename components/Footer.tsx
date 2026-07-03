export default function Footer() {
  return (
    <footer className="bg-sola-sky px-4 py-8 text-center text-white">
      <p className="text-lg font-bold">🐾 쏠라의 1살 생일을 축하하며 만든 홈페이지 🎂</p>
      <p className="mt-2 text-base opacity-90">© {new Date().getFullYear()} 쏠랭이네</p>
    </footer>
  );
}

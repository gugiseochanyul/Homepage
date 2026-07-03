const LINKS = [
  { href: "#about", label: "🐾 소개" },
  { href: "#hobbies", label: "🎾 취미" },
  { href: "#likes", label: "💛 좋아하는 것" },
  { href: "#gallery", label: "📸 갤러리" },
  { href: "#dream", label: "⭐ 꿈" },
  { href: "#breeds", label: "🐶 TOP 5" },
  { href: "#message", label: "✉️ 하고 싶은 말" },
  { href: "#guestbook", label: "📖 방명록" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-sola-pink/60 bg-sola-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-4 py-3 whitespace-nowrap">
        <span className="mr-2 shrink-0 text-2xl font-extrabold text-sola-brown">
          🐾 쏠랭이네
        </span>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full bg-white px-4 py-2 text-base font-bold text-sola-brown shadow-sm transition hover:-translate-y-0.5 hover:bg-sola-yellowLight"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

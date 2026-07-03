// 사진이 준비되면 public/gallery 폴더에 넣고,
// 아래 PLACEHOLDERS 배열의 gradient 부분을 <img src="/gallery/파일이름.jpg" .../> 로 바꿔주세요.
const PLACEHOLDERS = [
  { emoji: "🐾", gradient: "from-sola-pink to-sola-yellowLight" },
  { emoji: "🦴", gradient: "from-sola-sky to-sola-skyLight" },
  { emoji: "🎾", gradient: "from-sola-yellow to-sola-pinkLight" },
  { emoji: "🐶", gradient: "from-sola-pinkLight to-sola-sky" },
  { emoji: "🌸", gradient: "from-sola-skyLight to-sola-pink" },
  { emoji: "💤", gradient: "from-sola-yellowLight to-sola-sky" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-sola-pinkLight px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-extrabold text-sola-brown sm:text-4xl">
          📸 쏠랭이 갤러리
        </h2>
        <p className="mb-10 text-center text-lg">
          곧 진짜 쏠랭이 사진들로 채워질 거예요!
        </p>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {PLACEHOLDERS.map((p, i) => (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br ${p.gradient} text-6xl shadow-md`}
            >
              {p.emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

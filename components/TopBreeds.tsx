// 쏠랭이가 좋아하는 강아지 종 TOP 5 (원하는 내용으로 자유롭게 바꿔보세요!)
const BREEDS = [
  { rank: 1, name: "말티즈", emoji: "🐩", desc: "하얗고 폭신폭신, 나랑 닮았어요!" },
  { rank: 2, name: "골든 리트리버", emoji: "🐕", desc: "크고 순하고 잘 놀아줘서 좋아요." },
  { rank: 3, name: "웰시코기", emoji: "🦴", desc: "짧은 다리로 열심히 뛰는 게 귀여워요." },
  { rank: 4, name: "시바견", emoji: "🐕‍🦺", desc: "당당한 표정이 멋있어요." },
  { rank: 5, name: "푸들", emoji: "🐾", desc: "곱슬곱슬한 털이 신기해요." },
];

export default function TopBreeds() {
  return (
    <section id="breeds" className="bg-sola-skyLight px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-sola-brown sm:text-4xl">
          🐶 쏠랭이가 좋아하는 강아지 종 TOP 5
        </h2>
        <ol className="flex flex-col gap-4">
          {BREEDS.map((b) => (
            <li
              key={b.rank}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sola-pink text-xl font-extrabold text-white">
                {b.rank}
              </span>
              <span className="text-4xl">{b.emoji}</span>
              <div>
                <p className="text-xl font-bold">{b.name}</p>
                <p className="text-base">{b.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

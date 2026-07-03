const HOBBIES = [
  { emoji: "🚶", title: "산책하기", desc: "동네 한 바퀴, 냄새 맡으며 걷는 게 제일 행복해요!" },
  { emoji: "🪢", title: "터그놀이", desc: "장난감을 물고 힘차게 당기는 놀이를 정말 좋아해요." },
  { emoji: "🛁", title: "털 빗기", desc: "빗질 받으면서 스르르 눈이 감기는 순간이 좋아요." },
  { emoji: "🍖", title: "간식 타임", desc: "간식 냄새만 맡아도 꼬리가 저절로 흔들려요." },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-sola-skyLight px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-sola-brown sm:text-4xl">
          🎾 쏠랭이의 취미
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOBBIES.map((h) => (
            <div
              key={h.title}
              className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1"
            >
              <span className="text-5xl">{h.emoji}</span>
              <h3 className="text-xl font-bold">{h.title}</h3>
              <p className="text-base">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

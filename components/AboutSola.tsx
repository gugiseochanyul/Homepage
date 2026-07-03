const PROFILE = [
  { label: "이름", value: "쏠라 (닉네임: 쏠랭이)", emoji: "🐾" },
  { label: "나이", value: "1살", emoji: "🎂" },
  { label: "사는 곳", value: "김포", emoji: "🏡" },
  { label: "장래희망", value: "훌륭한 개", emoji: "🌟" },
];

export default function AboutSola() {
  return (
    <section id="about" className="bg-sola-cream px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-sola-brown sm:text-4xl">
          🐾 쏠랭이를 소개할게요!
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {PROFILE.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-3xl border-4 border-sola-yellow bg-white p-6 shadow-md"
            >
              <span className="text-4xl">{item.emoji}</span>
              <div>
                <p className="text-base font-bold text-sola-brown/70">{item.label}</p>
                <p className="text-xl font-extrabold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl bg-sola-skyLight p-6 shadow-md">
            <h3 className="mb-3 text-2xl font-bold">😍 좋아하는 것들</h3>
            <p className="text-lg">산책, 가족과 함께 있기, 간식, 터그놀이, 털 빗기</p>
          </div>
          <div className="rounded-3xl bg-sola-pinkLight p-6 shadow-md">
            <h3 className="mb-3 text-2xl font-bold">😖 싫어하는 것들</h3>
            <p className="text-lg">비, 혼자 있기, 밥 먹기, 잠 깨우기</p>
          </div>
        </div>
      </div>
    </section>
  );
}

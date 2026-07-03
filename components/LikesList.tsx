const LIKES = ["🚶 산책", "👨‍👩‍👧 가족과 함께 있기", "🍖 간식", "🪢 터그놀이", "🛁 털 빗기"];

export default function LikesList() {
  return (
    <section id="likes" className="bg-sola-cream px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-sola-brown sm:text-4xl">
          💛 쏠랭이가 좋아하는 것 목록
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {LIKES.map((like) => (
            <span
              key={like}
              className="rounded-full border-4 border-sola-yellow bg-white px-6 py-3 text-lg font-bold shadow-sm"
            >
              {like}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

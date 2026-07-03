export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sola-skyLight via-sola-pinkLight to-sola-yellowLight px-4 pb-20 pt-16 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <span className="animate-bounceSlow text-7xl">🐶</span>
        <h1 className="text-4xl font-extrabold leading-tight text-sola-brown sm:text-6xl">
          쏠랭이의 비밀기지
        </h1>
        <p className="text-xl font-semibold sm:text-2xl">
          김포에 사는 1살 강아지, 쏠라(쏠랭이)의 홈페이지에 온 걸 환영해요! 🎉
        </p>
        <p className="max-w-xl text-lg sm:text-xl">
          쏠랭이가 좋아하는 것들을 모아놓은 쏠라 만의 비밀기지예요.
          <br />
          아늑하게 구경하다 가세요 🌸
        </p>
        <a
          href="#about"
          className="animate-wiggle rounded-full bg-sola-pink px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-sola-pink/80"
        >
          쏠랭이 만나러 가기 🐾
        </a>
      </div>
    </section>
  );
}

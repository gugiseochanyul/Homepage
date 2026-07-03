# 🐾 쏠랭이의 비밀기지

쏠라(쏠랭이)를 위한 Next.js + Tailwind CSS 홈페이지입니다.

## 실행 방법

이 환경에는 Node.js가 설치되어 있지 않아 직접 실행/검증하지 못했습니다.
Node.js(18 이상 권장)가 설치된 컴퓨터에서 아래 명령어로 실행해주세요.

```bash
cd homepage
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속하면 확인할 수 있어요.

## 사진 추가하는 방법

1. `public/gallery` 폴더에 쏠랭이 사진 파일을 넣어주세요. (예: `sola1.jpg`)
2. [components/Gallery.tsx](components/Gallery.tsx) 안의 이모지 박스를
   `<img src="/gallery/sola1.jpg" alt="쏠랭이" className="h-full w-full rounded-3xl object-cover" />`
   형태로 바꿔주세요.

## 내용 수정하기

- `components/` 폴더 안의 각 파일이 홈페이지의 한 섹션(소개, 취미, 갤러리 등)을 담당해요.
- 텍스트나 목록을 바꾸고 싶으면 해당 파일을 열어 문구만 수정하면 돼요.
- 방명록은 브라우저의 localStorage에 저장돼요 (같은 브라우저에서만 보여요).

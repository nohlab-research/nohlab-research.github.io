# Noh Lab 홈페이지

전남대학교 약학대학 사회약학·약물역학 연구실(Noh Lab) 홈페이지입니다.
주소: https://nohlab-research.github.io/

## 파일 구성

```
├── index.html          홈
├── research.html       연구 분야
├── publications.html   논문 목록
├── members.html        구성원
├── news.html           소식
├── css/style.css       전체 디자인 (색상, 크기, 휴대폰 화면 배치)
├── data/
│   ├── publications.json   논문 목록 (논문은 이 파일 하나만 고치면 됩니다)
│   └── news.json           소식 목록 (소식은 이 파일 하나만 고치면 됩니다)
├── images/
│   ├── logo.png            로고 (바꾸면 모든 페이지에 반영)
│   ├── professor.jpg, student_*.jpg   구성원 사진
│   ├── research-1~4.jpg    연구 분야 그림
│   └── news/               소식 사진 (소식마다 폴더 하나)
└── js/
    ├── i18n.js, i18n-extra.js   한국어/영어 문구
    ├── publications.js          논문 목록 화면
    ├── news.js                  소식 화면 (분류 버튼 포함)
    ├── home-feed.js             홈의 최근 논문·최근 소식
    ├── nav.js, main.js          메뉴 등 공통 기능
```

## 소식 추가하기

1. 사진을 `images/news/2026-11-행사이름/` 폴더에 넣습니다. 폴더와 파일 이름은 영문·숫자·하이픈만 씁니다 (예: `images/news/2026-11-kspe-fall/1.jpg`).
2. `data/news.json` 의 `[` 바로 다음 줄에 아래 덩어리를 붙여 넣고 내용을 바꿉니다. 소식이 여러 개면 덩어리 사이에 쉼표(,)를 넣습니다.

```json
{
  "date": "2026-11-03",
  "category": "conference",
  "title": "제목",
  "title_en": "Title in English",
  "body": "내용",
  "body_en": "Content in English",
  "images": ["images/news/2026-11-kspe-fall/1.jpg", "images/news/2026-11-kspe-fall/2.jpg"]
}
```

- `category` 는 `award`(수상·장학), `publication`(논문 게재), `conference`(학회·발표), `life`(연구실 생활) 중 하나입니다.
- `title_en`, `body_en`, `images` 는 없어도 됩니다. 영문이 없으면 영문 화면에서도 한국어가 보입니다.
- 날짜 순서는 자동으로 정렬되며, 홈의 '최근 소식'에도 자동으로 나옵니다.

## 논문 추가하기

`data/publications.json` 에 아래 형식으로 한 줄을 추가합니다.

- `d` 는 출판일입니다(일을 모르면 `2026-05`). 이 날짜 순서대로 최신 논문이 위에 옵니다.
- 저자는 PubMed 표기(`Noh Y`)로 전체를 적고, 교수님 이름은 `**Noh Y**` 처럼 별표 두 개로 감싸면 굵게 표시됩니다. 공동 제1저자는 이름 뒤에 `*` 를 붙입니다.
- 링크(`u`)는 가능하면 DOI 주소로 넣습니다.
- 대표 논문으로 보이게 하려면 `"rep": true, "if": "영향력지수"` 를 덧붙입니다.

```json
{"y": 2026, "d": "2026-05-01", "t": "논문 제목", "u": "https://doi.org/10.xxxx/...", "a": "Kim A*, **Noh Y***, Lee B", "j": "학술지 약어. 2026 May 1;12(3):45-56."}
```

## 사진 기준

- 구성원·소식 사진: 가로 800px 이하, 파일당 200KB 이하
- 연구 분야 그림: 가로 1600px 이하

## 수정할 때 주의할 점

- 작업 전에 VS Code 왼쪽 아래 동기화(Sync) 버튼을 눌러 최신 상태를 받습니다.
- `css/style.css` 는 바꿀 부분만 고칩니다. 전체를 다시 붙여 넣으면 휴대폰 화면 배치가 흐트러질 수 있습니다.
- 올리기 전에 VS Code의 Source Control에서 바뀐 파일을 눌러, 의도한 줄만 바뀌었는지 확인합니다.

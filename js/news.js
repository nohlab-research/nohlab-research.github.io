/* ==========================================================================
   js/news.js - News 페이지 (데이터: data/news.json)
   새 소식은 data/news.json 에 한 덩어리만 추가하면 News 페이지와 홈 화면에 함께 반영됩니다.

   한 소식의 양식 (title_en, body_en, images 는 생략 가능):
   {
     "date": "2026-11-03",
     "category": "conference",
     "title": "제목",
     "title_en": "Title in English",
     "body": "내용",
     "body_en": "Content in English",
     "images": ["images/news/2026-11-conference/1.jpg", "images/news/2026-11-conference/2.jpg"],
     (동영상은 .mp4 로 images 목록에 넣고, 같은 이름의 -poster.jpg 를 함께 올림)
     "image_fit": "contain",            (선택) 그림·도표처럼 잘리면 안 되는 사진일 때
     "links": [                         (선택) 본문 아래 작은 바로가기 링크
       {"type": "press", "url": "https://..."}          → "기사 보기 ↗",
       {"type": "paper", "url": "https://doi.org/..."}   → "논문 원문 보기 ↗"
       ("label": "BRIC 보기", "label_en": "BRIC" 처럼 글자를 직접 정할 수도 있음. 본문 줄바꿈은 \n)
     ]
   }

   category 는 아래 네 가지 중 하나:
     award       = 수상·선정 (수상, 장학, 연구과제 선정)
     publication = 논문 게재
     conference  = 학회·발표
     life        = 연구실 생활
   ========================================================================== */
(function () {
  const CATS = ["award", "publication", "conference", "life"];
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const tr = (k) => (typeof getTrans === "function" ? getTrans(k) : k);
  const lang = () => { try { return localStorage.getItem("site_lang") || "ko"; } catch (e) { return "ko"; } };
  const pick = (p, key) => (lang() === "en" && p[key + "_en"]) ? p[key + "_en"] : p[key];

  let NEWS = null;
  let current = "all";

  function load() {
    if (!NEWS) {
      NEWS = fetch("data/news.json", { cache: "no-cache" })
        .then((r) => r.json())
        .then((d) => d.map((p, i) => ({ ...p, _i: i })).sort((a, b) => String(b.date).localeCompare(String(a.date)) || a._i - b._i));
    }
    return NEWS;
  }

  function renderFilters(list) {
    const bar = document.getElementById("news-filters");
    if (!bar) return;
    const count = (c) => (c === "all" ? list.length : list.filter((p) => p.category === c).length);
    bar.innerHTML = ["all", ...CATS].map((c) =>
      `<button type="button" class="news-filter${c === current ? " active" : ""}" data-cat="${c}" aria-pressed="${c === current}">${esc(tr("news_cat_" + c))}<span class="news-filter-count">${count(c)}</span></button>`
    ).join("");
    bar.querySelectorAll(".news-filter").forEach((btn) => {
      btn.addEventListener("click", () => { current = btn.dataset.cat; render(); });
    });
  }

  const isVid = (src) => /\.(mp4|webm)$/i.test(src);
  const poster = (src) => src.replace(/\.(mp4|webm)$/i, "-poster.jpg");
  const media = (src, fit, alt) => isVid(src)
    ? `<video src="${esc(src)}" poster="${esc(poster(src))}" class="news-img news-video" autoplay muted playsinline loop preload="metadata"></video>`
    : `<img src="${esc(src)}" class="news-img${fit || ""}" alt="${alt || ""}" loading="lazy">`;

  function card(p) {
    const imgs = Array.isArray(p.images) ? p.images.filter(Boolean) : [];
    const title = esc(pick(p, "title"));
    const fit = p.image_fit === "contain" ? " news-img-contain" : "";
    const cover = imgs.length ? `<div class="news-cover" data-fit="${fit}" data-alt="${title}">${media(imgs[0], fit, title)}</div>` : "";
    const links = Array.isArray(p.links) ? p.links.filter((l) => l && l.url).map((l) =>
      `<a class="news-link" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer"${l.title ? ` title="${esc(l.title)}"` : ""}>${esc((lang() === "en" && l.label_en) || l.label || tr(l.type === "paper" ? "news_link_paper" : "news_link_press"))} ↗</a>`
    ).join("") : "";
    const thumbs = imgs.length > 1
      ? `<div class="news-thumbs">${imgs.map((src, i) => `<button type="button" class="news-thumb${i === 0 ? " active" : ""}${isVid(src) ? " news-thumb-video" : ""}" data-src="${esc(src)}" aria-label="${i + 1}"><img src="${esc(isVid(src) ? poster(src) : src)}" alt="" loading="lazy"></button>`).join("")}</div>`
      : "";
    const cat = CATS.includes(p.category) ? `<span class="news-cat news-cat-${p.category}">${esc(tr("news_cat_" + p.category))}</span>` : "";
    return `
      <article class="news-card">
        ${cover}
        ${thumbs}
        <div class="news-body">
          <div class="news-meta">${cat}<span>${esc(p.date)}</span></div>
          <h3>${title}</h3>
          ${pick(p, "body") ? `<p>${esc(pick(p, "body"))}</p>` : ""}
          ${links ? `<div class="news-links">${links}</div>` : ""}
        </div>
      </article>`;
  }

  function render() {
    const box = document.getElementById("news-container");
    if (!box) return;
    load().then((list) => {
      renderFilters(list);
      const shown = current === "all" ? list : list.filter((p) => p.category === current);
      if (!shown.length) {
        box.innerHTML = `<p class="feed-empty">${esc(tr("news_empty"))}</p>`;
        return;
      }
      box.innerHTML = shown.map(card).join("");
      box.querySelectorAll(".news-card").forEach((el) => {
        const coverBox = el.querySelector(".news-cover");
        el.querySelectorAll(".news-thumb").forEach((t) => {
          t.addEventListener("click", () => {
            if (coverBox) coverBox.innerHTML = media(t.dataset.src, coverBox.dataset.fit, coverBox.dataset.alt);
            el.querySelectorAll(".news-thumb").forEach((x) => x.classList.toggle("active", x === t));
          });
        });
      });
    }).catch(() => {
      box.innerHTML = `<p class="feed-empty">${esc(tr("news_empty"))}</p>`;
    });
  }

  document.addEventListener("DOMContentLoaded", render);
  window.addEventListener("languageChanged", render);
})();

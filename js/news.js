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
     "images": ["images/news/2026-11-conference/1.jpg", "images/news/2026-11-conference/2.jpg"]
   }

   category 는 아래 네 가지 중 하나:
     award       = 수상·장학
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

  function card(p) {
    const imgs = Array.isArray(p.images) ? p.images.filter(Boolean) : [];
    const title = esc(pick(p, "title"));
    const cover = imgs.length ? `<img src="${esc(imgs[0])}" class="news-img" alt="${title}" loading="lazy">` : "";
    const thumbs = imgs.length > 1
      ? `<div class="news-thumbs">${imgs.map((src, i) => `<button type="button" class="news-thumb${i === 0 ? " active" : ""}" data-src="${esc(src)}" aria-label="${i + 1}"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join("")}</div>`
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
        const coverImg = el.querySelector(".news-img");
        el.querySelectorAll(".news-thumb").forEach((t) => {
          t.addEventListener("click", () => {
            if (coverImg) coverImg.src = t.dataset.src;
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

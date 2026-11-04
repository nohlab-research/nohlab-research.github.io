/* ==========================================================================
   js/home-feed.js - Home 최신 논문 / 최신 소식 자동 반영
   - 논문: data/publications.json 의 가장 최근 항목
   - 소식: data/news.json 의 가장 최근 항목 (분류와 상관없이 날짜순)
   ========================================================================== */
(function () {
  const PUB_COUNT = 2;
  const NEWS_COUNT = 2;
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const tr = (k) => (typeof getTrans === "function" ? getTrans(k) : k);

  let PUBS = null;
  function loadPubs() {
    if (!PUBS) PUBS = fetch("data/publications.json", { cache: "no-cache" }).then((r) => r.json()).then((d) => d.map((p, i) => ({ ...p, _i: i })).sort((x, y) => String(y.d || y.y).localeCompare(String(x.d || x.y)) || x._i - y._i));
    return PUBS;
  }

  function renderPubs() {
    const box = document.getElementById("latest-pubs");
    if (!box) return;
    loadPubs().then((list) => {
      box.innerHTML = list.slice(0, PUB_COUNT).map((p) => {
        const href = p.u ? `href="${esc(p.u)}" target="_blank" rel="noopener noreferrer"` : 'href="publications"';
        return `<a class="feed-item" ${href}><span class="pub-year">${p.y}</span><div class="feed-text"><h4>${esc(p.t)}</h4><p>${esc(p.j)}</p></div></a>`;
      }).join("");
    }).catch(() => { box.innerHTML = ""; });
  }

  let NEWS = null;
  function loadNews() {
    if (!NEWS) NEWS = fetch("data/news.json", { cache: "no-cache" }).then((r) => r.json()).then((d) => d.map((p, i) => ({ ...p, _i: i })).sort((x, y) => String(y.date).localeCompare(String(x.date)) || x._i - y._i));
    return NEWS;
  }

  function renderNews() {
    const box = document.getElementById("latest-news");
    if (!box) return;
    const en = (typeof localStorage !== "undefined" && (function () { try { return localStorage.getItem("site_lang") === "en"; } catch (e) { return false; } })());
    const empty = () => { box.innerHTML = `<p class="feed-empty">${esc(tr("news_empty"))}</p>`; };
    loadNews().then((posts) => {
      if (!posts.length) return empty();
      box.innerHTML = posts.slice(0, NEWS_COUNT).map((p) => {
        const title = (en && p.title_en) || p.title;
        const body = String((en && p.body_en) || p.body || "");
        const short = body.length > 70 ? body.slice(0, 70) + "…" : body;
        return `<a class="feed-item" href="news"><span class="pub-year">${esc(p.date)}</span><div class="feed-text"><h4>${esc(title)}</h4><p>${esc(short)}</p></div></a>`;
      }).join("");
    }).catch(empty);
  }

  function renderAll() { renderPubs(); renderNews(); }
  document.addEventListener("DOMContentLoaded", renderAll);
  window.addEventListener("languageChanged", renderAll);
})();
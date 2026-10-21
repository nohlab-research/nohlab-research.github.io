/* ==========================================================================
   js/home-feed.js - Home 최신 논문 / 최신 소식 자동 반영
   - 논문: data/publications.json 의 가장 최근 항목
   - 소식: News 페이지에서 등록한 글(localStorage "noh_news")의 최신 항목
   ========================================================================== */
(function () {
  const PUB_COUNT = 2;
  const NEWS_COUNT = 2;
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const tr = (k) => (typeof getTrans === "function" ? getTrans(k) : k);

  let PUBS = null;
  function loadPubs() {
    if (!PUBS) PUBS = fetch("data/publications.json").then((r) => r.json()).then((d) => d.map((p, i) => ({ ...p, _i: i })).sort((x, y) => y.y - x.y || x._i - y._i));
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

  function renderNews() {
    const box = document.getElementById("latest-news");
    if (!box) return;
    let posts = [];
    try { posts = JSON.parse(localStorage.getItem("noh_news") || "[]"); } catch (e) {}
    if (!posts.length) {
      box.innerHTML = `<p class="feed-empty">${esc(tr("news_empty"))}</p>`;
      return;
    }
    box.innerHTML = posts.slice(0, NEWS_COUNT).map((p) => {
      const body = String(p.body || "");
      const short = body.length > 70 ? body.slice(0, 70) + "…" : body;
      return `<a class="feed-item" href="news"><span class="pub-year">${esc(p.date)}</span><div class="feed-text"><h4>${esc(p.title)}</h4><p>${esc(short)}</p></div></a>`;
    }).join("");
  }

  function renderAll() { renderPubs(); renderNews(); }
  document.addEventListener("DOMContentLoaded", renderAll);
  window.addEventListener("languageChanged", renderAll);
})();
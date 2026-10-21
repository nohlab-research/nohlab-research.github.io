/* ==========================================================================
   js/publications.js - Publications 페이지 (데이터: data/publications.json)
   새 논문은 data/publications.json 에 한 줄만 추가하면 홈·목록·개수가 함께 갱신됩니다.
   최신 논문이 위, 번호는 가장 오래된 논문 = 1번
   ========================================================================== */
(function () {
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const authors = (a) => esc(a).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const ext = 'target="_blank" rel="noopener noreferrer"';

  document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("pub-list");
    if (!list) return;
    fetch("data/publications.json").then((r) => r.json()).then((data) => {
      const items = data.map((p, i) => ({ ...p, _i: i }));
      items.sort((a, b) => b.y - a.y || a._i - b._i);
      items.forEach((p, i) => (p.n = items.length - i));

      const html = []; let year = null;
      items.forEach((p) => {
        if (p.y !== year) {
          year = p.y;
          html.push(`<li class="pub-year-heading"><h2>${year}<span class="pub-year-count">${items.filter((x) => x.y === year).length}</span></h2></li>`);
        }
        const link = p.u ? `<a class="pub-link" href="${esc(p.u)}" ${ext}>${/doi\.org/.test(p.u) ? "DOI" : "Link"} ↗</a>` : "";
        html.push(`<li class="pub-item"><span class="pub-number">${p.n}</span><div class="pub-details"><span class="pub-title">${esc(p.t)}</span><p class="pub-authors">${authors(p.a)}</p><p class="pub-journal"><em>${esc(p.j)}</em></p>${link}</div></li>`);
      });
      list.innerHTML = html.join("");
      const total = document.getElementById("pub-total-count");
      if (total) total.textContent = items.length;
    }).catch(() => {
      list.innerHTML = '<li class="feed-empty">논문 데이터를 불러오지 못했습니다. 웹 서버(또는 GitHub Pages)에서 열어 주세요.</li>';
    });
  });
})();
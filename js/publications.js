/* ==========================================================================
   js/publications.js - Publications 페이지 (데이터: data/publications.json)
   새 논문은 data/publications.json 에 한 줄만 추가하면 홈·목록·개수가 함께 갱신됩니다.
   출판일("d": "YYYY-MM-DD", 일을 모르면 "YYYY-MM") 기준 최신 논문이 위, 번호는 가장 오래된 논문 = 1번
   ========================================================================== */
(function () {
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const authors = (a) => esc(a).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const ext = 'target="_blank" rel="noopener noreferrer"';

  document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("pub-list");
    if (!list) return;
    fetch("data/publications.json", { cache: "no-cache" }).then((r) => r.json()).then((data) => {
      const items = data.map((p, i) => ({ ...p, _i: i }));
      items.sort((a, b) => String(b.d || b.y).localeCompare(String(a.d || a.y)) || a._i - b._i);
      items.forEach((p, i) => (p.n = items.length - i));

      // 연도별 묶음: 제목(연도)을 누르면 그 해 논문이 접히고 펼쳐짐 (처음에는 모두 펼침)
      const years = [...new Set(items.map((p) => p.y))];
      list.innerHTML = years.map((year) => {
        const ys = items.filter((p) => p.y === year);
        const rows = ys.map((p) => {
          const link = p.u ? `<a class="pub-link" href="${esc(p.u)}" ${ext}>${/doi\.org/.test(p.u) ? "DOI" : "Link"} ↗</a>` : "";
          return `<li class="pub-item"><span class="pub-number">${p.n}</span><div class="pub-details"><span class="pub-title">${esc(p.t)}</span><p class="pub-authors">${authors(p.a)}</p><p class="pub-journal"><em>${esc(p.j)}</em></p>${link}</div></li>`;
        }).join("");
        return `<li class="pub-year-block"><details class="pub-year-group" open><summary class="pub-year-heading"><h2>${year}<span class="pub-year-count">${ys.length}</span></h2></summary><ul class="pub-list">${rows}</ul></details></li>`;
      }).join("");

      // 대표 논문 (rep: true) — 전체 목록과 같은 모양, 번호 대신 연도와 영향력지수 표시
      const reps = items.filter((p) => p.rep);
      const repBox = document.getElementById("pub-rep");
      if (repBox && reps.length) {
        document.getElementById("pub-rep-list").innerHTML = reps.map((p) => {
          const link = p.u ? `<a class="pub-link" href="${esc(p.u)}" ${ext}>${/doi\.org/.test(p.u) ? "DOI" : "Link"} ↗</a>` : "";
          const badge = p.if ? ` <span class="pub-if">IF ${esc(p.if)}</span>` : "";
          return `<li class="pub-item"><span class="pub-number pub-number-year">${p.y}</span><div class="pub-details"><span class="pub-title">${esc(p.t)}</span><p class="pub-authors">${authors(p.a)}</p><p class="pub-journal"><em>${esc(p.j)}</em>${badge}</p>${link}</div></li>`;
        }).join("");
        document.getElementById("pub-rep-count").textContent = reps.length;
        repBox.hidden = false;
      }
      const total = document.getElementById("pub-total-count");
      if (total) total.textContent = items.length;
    }).catch(() => {
      list.innerHTML = '<li class="feed-empty">논문 데이터를 불러오지 못했습니다. 웹 서버(또는 GitHub Pages)에서 열어 주세요.</li>';
    });
  });
})();
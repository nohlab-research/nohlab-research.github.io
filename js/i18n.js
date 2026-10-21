/* ==========================================================================
   js/i18n-extra.js - i18n.js 에 추가/덮어쓰는 번역 문구
   (반드시 i18n.js 바로 다음에 로드)
   ========================================================================== */
Object.assign(translations.ko, {
  hero_btn2: "출간 논문",
  refs_title: "대표 연구",
  pi_email_label: "이메일",
  pi_profile_label: "연구자 프로필",
  mem_researchers: "Researchers",
  pub_total_label: "전체 논문",
  modal_btn_clear_img: "선택 취소",
  footer_lab: "Noh Lab",
  footer_affil: "전남대학교 약학대학",
  footer_contact: "Contact",
  footer_email: "이메일",
  footer_tel: "전화",
  footer_addr_label: "주소",
  footer_addr: "광주광역시 북구 용봉로 77<br>전남대학교 약학대학 2호관",
  footer_links: "Links",
  footer_univ: "전남대학교"
});

Object.assign(translations.en, {
  hero_btn2: "View Publications",
  refs_title: "Representative Studies",
  pi_email_label: "Email",
  pi_profile_label: "Researcher Profiles",
  mem_researchers: "Researchers",
  pub_total_label: "Total publications",
  modal_btn_clear_img: "Remove",
  footer_lab: "Noh Lab",
  footer_affil: "College of Pharmacy, Chonnam National University",
  footer_contact: "Contact",
  footer_email: "Email",
  footer_tel: "Tel",
  footer_addr_label: "Address",
  footer_addr: "Building 2, 77 Yongbong-ro, Buk-gu<br>Chonnam National University, Gwangju, South Korea",
  footer_links: "Links",
  footer_univ: "Chonnam National University"
});

/* footer_addr 는 줄바꿈(<br>)이 필요하므로 언어 변경 시 innerHTML 로 다시 적용 */
function applyHtmlKeys() {
  const lang = localStorage.getItem("site_lang") || "ko";
  document.querySelectorAll('[data-i18n="footer_addr"]').forEach(el => {
    el.innerHTML = translations[lang].footer_addr;
  });
}
window.addEventListener("languageChanged", applyHtmlKeys);
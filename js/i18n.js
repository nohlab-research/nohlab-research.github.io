/* ==========================================================================
   js/i18n.js - Multi-Language Translation System (Full Page Support)
   ========================================================================== */

const translations = {
  ko: {
    // ----------------------------------------------------------------------
    // 1. 공통 및 네비게이션 (Common & Navigation)
    // ----------------------------------------------------------------------
    site_title: "Social Pharmacy & Pharmacoepidemiology Lab",
    site_brand_name: "노윤하 교수 Lab",
    brand_name: "노윤하 교수 Lab",
    brand_affil: "전남대학교 약학대학",
    nav_home: "Home",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_members: "Members",
    nav_news: "News",
    nav_contact: "Contact",
    see_all: "전체 보기 →",

    // ----------------------------------------------------------------------
    // 2. 홈 페이지 (Home Page)
    // ----------------------------------------------------------------------
    hero_tagline: "CHONNAM NATIONAL UNIVERSITY · COLLEGE OF PHARMACY",
    hero_title: "사회약학·약물역학 연구실",
    hero_sub: "보건의료 빅데이터와 인과추론으로 의약품의 실제 효과와 안전성을 평가하고, 근거에 기반한 보건의료 정책을 지원합니다.",
    hero_btn1: "연구 분야",
    hero_btn2: "Contact Us",
    stat_1: "출간 논문 수",
    stat_2: "진행 연구 과제",
    stat_3: "구성원",
    res_title: "연구 분야",
    res_sub: "빅데이터와 다학제적 접근법을 통한 보건의료 문제 해결",
    res_c1_t: "만성·희귀질환 약물치료 평가",
    res_c1_d: "당뇨병 등 만성질환과 희귀·난치질환, 여러 약을 함께 복용하는 노인에서 신약과 기존 치료의 실제 효과와 안전성을 비교합니다.",
    res_c2_t: "임신부·소아 약물 안전성",
    res_c2_d: "임상시험에서 제외되는 임신부와 소아에서 약물 노출이 임신 결과와 출생아 건강에 미치는 영향을 보건의료 빅데이터로 평가합니다.",
    res_c3_t: "인과추론·데이터 융합 방법론",
    res_c3_d: "Target trial emulation, 시간 관련 비뚤림 보정, AI와 다중오믹스 연계로 관찰 자료에서 믿을 수 있는 인과 근거를 만드는 방법을 개발·검증합니다.",
    res_c4_t: "규제과학·보건의료정책",
    res_c4_d: "실사용 근거의 허가·급여 활용, 의약품 정보와 제도, 보건사업의 효과를 평가해 근거 기반 보건의료 정책 수립을 지원합니다.",
    home_pub_tag: "Publications",
    home_pub_title: "최근 출간 논문",
    home_pub_sub: "JAMA, Gut, Diabetes Care 등 저명 학술지에 게재된 최신 연구 성과입니다.",
    home_member_tag: "Members",
    home_member_title: "연구실 구성원",
    home_member_sub: "함께 연구를 이끌어가는 대학원생 및 학부연구생을 소개합니다.",
    home_news_tag: "News",
    home_news_title: "최근 소식",
    home_news_sub: "연구실의 학회 발표, 논문 게재, 수상 등의 소식을 확인하세요.",

    // ----------------------------------------------------------------------
    // 3. 구성원 페이지 (Members Page)
    // ----------------------------------------------------------------------
    mem_site_title: "Members - Noh Lab",
    mem_page_title: "Members",
    mem_page_sub: "사회약학 및 약물역학 빅데이터 연구실 연구진 소개입니다.",
    mem_prof_name: "노윤하 교수",
    mem_prof_role: "교수",
    pi_name: "노윤하 교수",
    pi_fullname: "노윤하 교수 (Yunha Noh, PharmD, PhD)",
    role_pi: "전남대학교 약학대학 사회약학/약물역학 조교수",
    pi_profile_label: "연구자 프로필:",
    pi_career_title: "경력 (Career)",
    pi_edu_title: "학력 (Education)",
    pi_etc_title: "기타 경력",
    pi_etc_1: "한국사회약학회 이사",
    pi_etc_2: "대한약물역학위해관리학회 편집간행위원",
    pi_pub_title: "대표 논문 (Selected Publications)",
    role_phd: "박사과정 (Ph.D. Student)",
    role_ms: "석사과정 (M.S. Student)",
    role_ug_pharm: "학부연구생 (BS Pharm)",
    role_ug_stat: "학부연구생 (BS in Stat)",
    desc_add_info: "설명 추가",

    // Member Names (한국어)
    mem_s1_name: "민지우",
    mem_s1_role: "석사과정",
    mem_s2_name: "김민정",
    mem_s2_role: "학부연구생",
    mem_s3_name: "류은수",
    mem_s3_role: "학부연구생",
    mem_mjw_name: "민지우",
    mem_kmj_name: "김민정",
    mem_les_name: "류은수",
    mem_ldm_name: "이다민",
    mem_lcm_name: "이찬명",
    mem_lje_name: "이지언",
    mem_lsh_name: "임승현",
    mem_jjw_name: "전재원",

    // ----------------------------------------------------------------------
    // 4. 소식 페이지 & 관리자 (News Page & Admin)
    // ----------------------------------------------------------------------
    news_site_title: "News - Noh Lab",
    news_page_title: "News & Activity",
    news_btn_write: "+ 소식 작성하기",
    news_empty: "등록된 소식이 없습니다.",
    news_btn_delete: "삭제",
    prompt_delete_pass: "삭제 비밀번호를 입력하세요:",
    alert_pass_incorrect: "비밀번호가 일치하지 않습니다.",
    modal_title: "새 소식 등록",
    modal_ph_title: "제목을 입력하세요",
    modal_ph_body: "내용을 입력하세요",
    modal_label_img: "사진 첨부 (선택):",
    modal_ph_pass: "관리자 비밀번호",
    modal_btn_submit: "등록하기",
    modal_btn_cancel: "취소",

    // ----------------------------------------------------------------------
    // 5. 논문 페이지 (Publications Page)
    // ----------------------------------------------------------------------
    pub_site_title: "Publications - Noh Lab",
    pub_page_title: "Publications",
    pub_section_desc: "주요 출간 논문 및 연구 성과 목록입니다.",

    // ----------------------------------------------------------------------
    // 6. 연구 분야 페이지 (Research Page)
    // ----------------------------------------------------------------------
    res_diagram_title: "Research",
    res_diagram_sub: "사회약학 및 약물역학 빅데이터 연구실은 Real-World Data(RWD) 기반의 고도화된 역학 연구 기법을 통해 의약품의 안전성과 유효성을 규명하고, 보건의료 정책 및 규제 의사결정에 필요한 임상적 근거(RWE)를 창출합니다.",
    res_diagram_hub: "Noh Lab",

    // 연구 네트워크 중앙
    core_sub: "RWD · RWE · CAUSAL",

    // 연구 네트워크 Topic 01
    topic1_short: "약물역학 & RWD/RWE",
    topic1_subtitle: "PHARMACOEPIDEMIOLOGY",
    topic1_hint: "RWD · RWE",

    topic1_full: "만성·희귀질환 약물치료 평가",
    topic1_d: "당뇨병 등 만성질환과 희귀·난치질환, 여러 약을 함께 복용하는 노인에서 신약과 기존 치료의 실제 효과와 안전성을 비교합니다.",
    topic1_kw1: "당뇨병 신약(GLP-1 수용체 작용제·SGLT2 억제제)",
    topic1_kw2: "희귀·난치질환(중증근무력증 등)",
    topic1_kw3: "노인 다제약물",
    topic1_kw4: "비교 효과·안전성",
    topic1_ref1: "GLP-1 수용체 작용제와 위식도역류질환 (Annals of Internal Medicine, 2025)",
    topic1_ref2: "중증근무력증 사망률 코호트 (Pharmacoepidemiology and Risk Management, 2025)",

    // 연구 네트워크 Topic 02
    topic2_short: "약물감시 & 신호탐지",
    topic2_subtitle: "PHARMACOVIGILANCE",
    topic2_hint: "SAFETY SIGNALS",

    topic2_full: "임신부·소아 약물 안전성",
    topic2_d: "임상시험에서 제외되는 임신부와 소아에서 약물 노출이 임신 결과와 출생아 건강에 미치는 영향을 보건의료 빅데이터로 평가합니다.",
    topic2_kw1: "임신 중 약물 노출",
    topic2_kw2: "선천기형·임신 결과",
    topic2_kw3: "소아 약물 안전성",
    topic2_kw4: "생애전주기",
    topic2_ref1: "벤조디아제핀과 선천기형 (PLoS Medicine, 2022)",
    topic2_ref2: "위산억제제와 소아 알레르기 질환 (JAMA Pediatrics, 2023)",

    // 연구 네트워크 Topic 03
    topic3_short: "주산기 · 소아 약물안전성",
    topic3_subtitle: "PERINATAL & PEDIATRICS",
    topic3_hint: "MEDICATION SAFETY",

    topic3_full: "인과추론·데이터 융합 방법론",
    topic3_d: "Target trial emulation, 시간 관련 비뚤림 보정, AI와 다중오믹스 연계로 관찰 자료에서 믿을 수 있는 인과 근거를 만드는 방법을 개발·검증합니다.",
    topic3_kw1: "Target trial emulation",
    topic3_kw2: "Time-related bias(시간 관련 비뚤림)",
    topic3_kw3: "AI 기반 약물감시",
    topic3_kw4: "다중오믹스·데이터 연계",
    topic3_ref1: "측정 불가 시간 비뚤림 보정 검증 (International Journal of Epidemiology, 2023)",

    // 연구 네트워크 Topic 04
    topic4_short: "규제과학 & 보건정책",
    topic4_subtitle: "REGULATORY & POLICY",
    topic4_hint: "HEALTHCARE POLICY",

    topic4_full: "규제과학·보건의료정책",
    topic4_d: "실사용 근거의 허가·급여 활용, 의약품 정보와 제도, 보건사업의 효과를 평가해 근거 기반 보건의료 정책 수립을 지원합니다.",
    topic4_kw1: "실사용 근거의 규제 활용",
    topic4_kw2: "의약품 허가·라벨",
    topic4_kw3: "급여·접근성",
    topic4_kw4: "보건의료정책·제도",
    topic4_ref1: "FDA·EMA 실사용 근거 허가 사례 분석 (Journal of Pharmacoepidemiology and Risk Management, 2022)",
    topic4_ref2: "한일 신약 도입 지연 비교 (Therapeutic Innovation & Regulatory Science, 2020)",

    // ----------------------------------------------------------------------
    // 7. 연락처 페이지 (Contact Page)
    // ----------------------------------------------------------------------
    contact_site_title: "Contact - Noh Lab",
    contact_title: "Location & Contact",
    contact_sub: "연구실 위치 및 연락처 정보입니다.",
    contact_office: "연구실 위치",
    contact_addr: "광주광역시 북구 용봉로 77 전남대학교 약학대학 2호관",
    contact_email: "이메일 문의",
    map_kakao_btn: "Kakao Map 길찾기 ↗",
    map_naver_btn: "Naver Map 길찾기 ↗"
  },

  en: {
    // ----------------------------------------------------------------------
    // 1. Common & Navigation
    // ----------------------------------------------------------------------
    site_title: "Social Pharmacy & Pharmacoepidemiology Lab",
    site_brand_name: "Prof. Yunha Noh Lab",
    brand_name: "Prof. Yunha Noh Lab",
    brand_affil: "Chonnam National University College of Pharmacy",
    nav_home: "Home",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_members: "Members",
    nav_news: "News",
    nav_contact: "Contact",
    see_all: "View All →",

    // ----------------------------------------------------------------------
    // 2. Home Page
    // ----------------------------------------------------------------------
    hero_tagline: "CHONNAM NATIONAL UNIVERSITY · COLLEGE OF PHARMACY",
    hero_title: "Social Pharmacy & Pharmacoepidemiology Lab",
    hero_sub: "Generating real-world evidence on the safety and effectiveness of medicines to inform better health policy.",
    hero_btn1: "Research Areas",
    hero_btn2: "Contact Us",
    stat_1: "Publications",
    stat_2: "Active Projects",
    stat_3: "Members",
    res_title: "Research Areas",
    res_sub: "Solving Healthcare Problems through Big Data and Multidisciplinary Approaches",
    res_c1_t: "Chronic & Rare Disease Therapeutics",
    res_c1_d: "We compare the real-world effectiveness and safety of new and existing treatments in chronic diseases such as diabetes, rare and intractable diseases, and older adults taking multiple medications.",
    res_c2_t: "Maternal & Child Medication Safety",
    res_c2_d: "Using healthcare big data, we evaluate how medication exposure affects pregnancy outcomes and child health in pregnant women and children, who are excluded from clinical trials.",
    res_c3_t: "Causal Inference & Data Innovation",
    res_c3_d: "We develop and validate methods such as target trial emulation, correction of time-related bias, and linkage of AI and multi-omics to generate credible causal evidence from observational data.",
    res_c4_t: "Regulatory Science & Health Policy",
    res_c4_d: "We evaluate the use of real-world evidence in approval and reimbursement, drug information and systems, and the effects of health programs to support evidence-based health policy.",
    home_pub_tag: "Publications",
    home_pub_title: "Recent Publications",
    home_pub_sub: "Latest research published in prominent journals such as JAMA, Gut, and Diabetes Care.",
    home_member_tag: "Members",
    home_member_title: "Lab Members",
    home_member_sub: "Introducing graduate and undergraduate researchers leading the research together.",
    home_news_tag: "News",
    home_news_title: "Recent News",
    home_news_sub: "Check out the latest news including conference presentations, paper publications, and awards.",

    // ----------------------------------------------------------------------
    // 3. Members Page
    // ----------------------------------------------------------------------
    mem_site_title: "Members - Noh Lab",
    mem_page_title: "Members",
    mem_page_sub: "Meet the team of Social Pharmacy & Pharmacoepidemiology Lab.",
    mem_prof_name: "Prof. Yunha Noh",
    mem_prof_role: "Professor",
    pi_name: "Prof. Yunha Noh",
    pi_fullname: "Prof. Yunha Noh, PharmD, PhD",
    role_pi: "Assistant Professor, College of Pharmacy, Chonnam National University",
    pi_profile_label: "Researcher Profiles:",
    pi_career_title: "Career",
    pi_edu_title: "Education",
    pi_etc_title: "Affiliations & Services",
    pi_etc_1: "Board Member, Korean Society of Social and Administrative Pharmacy",
    pi_etc_2: "Editorial Board Member, Korean Society of Pharmacoepidemiology and Risk Management",
    pi_pub_title: "Selected Publications",
    role_phd: "Ph.D. Student",
    role_ms: "M.S. Student",
    role_ug_pharm: "Undergraduate Researcher (BS Pharm)",
    role_ug_stat: "Undergraduate Researcher (BS in Stat)",
    desc_add_info: "Description to be added",

    // Member Names (English)
    mem_s1_name: "Jiwoo Min",
    mem_s1_role: "Master's Student",
    mem_s2_name: "Minjung Kim",
    mem_s2_role: "Undergraduate Researcher",
    mem_s3_name: "Eunsoo Lew",
    mem_s3_role: "Undergraduate Researcher",
    mem_mjw_name: "Jiwoo Min",
    mem_kmj_name: "Minjung Kim",
    mem_les_name: "Eunsoo Lew",
    mem_ldm_name: "Damin Lee",
    mem_lcm_name: "Chanmyeong Lee",
    mem_lje_name: "Jieon Lee",
    mem_lsh_name: "Seunghyun Lim",
    mem_jjw_name: "Jaewon Jeon",

    // ----------------------------------------------------------------------
    // 4. News Page & Admin
    // ----------------------------------------------------------------------
    news_site_title: "News - Noh Lab",
    news_page_title: "News & Activity",
    news_btn_write: "+ Write Post",
    news_empty: "No news registered.",
    news_btn_delete: "Delete",
    prompt_delete_pass: "Enter deletion password:",
    alert_pass_incorrect: "Password does not match.",
    modal_title: "Post New Update",
    modal_ph_title: "Enter title",
    modal_ph_body: "Enter content",
    modal_label_img: "Attach Image (Optional):",
    modal_ph_pass: "Admin Password",
    modal_btn_submit: "Submit",
    modal_btn_cancel: "Cancel",

    // ----------------------------------------------------------------------
    // 5. Publications Page
    // ----------------------------------------------------------------------
    pub_site_title: "Publications - Noh Lab",
    pub_page_title: "Publications",
    pub_section_desc: "Selected publications and research accomplishments.",

    // ----------------------------------------------------------------------
    // 6. Research Page
    // ----------------------------------------------------------------------
    res_diagram_title: "Research",
    res_diagram_sub: "The Social Pharmacy & Big Data Pharmacoepidemiology Laboratory investigates drug safety and effectiveness using advanced epidemiological methods on Real-World Data (RWD), generating Real-World Evidence (RWE) to inform healthcare decisions and regulatory policy.",
    res_diagram_hub: "Noh Lab",

    // Research Network Central
    core_sub: "RWD · RWE · CAUSAL",

    // Research Network Topic 01
    topic1_short: "Pharmacoepidemiology & RWD/RWE",
    topic1_subtitle: "PHARMACOEPIDEMIOLOGY",
    topic1_hint: "RWD · RWE",

    topic1_full: "Chronic & Rare Disease Therapeutics",
    topic1_d: "We compare the real-world effectiveness and safety of new and existing treatments in chronic diseases such as diabetes, rare and intractable diseases, and older adults taking multiple medications.",
    topic1_kw1: "New diabetes drugs (GLP-1 RAs, SGLT2 inhibitors)",
    topic1_kw2: "Rare & intractable diseases (e.g., myasthenia gravis)",
    topic1_kw3: "Polypharmacy in older adults",
    topic1_kw4: "Comparative effectiveness & safety",
    topic1_ref1: "GLP-1 receptor agonists and gastroesophageal reflux disease (Annals of Internal Medicine, 2025)",
    topic1_ref2: "Mortality in uncontrolled myasthenia gravis: a population-based cohort (Pharmacoepidemiology and Risk Management, 2025)",

    // Research Network Topic 02
    topic2_short: "Pharmacovigilance & Signal Detection",
    topic2_subtitle: "PHARMACOVIGILANCE",
    topic2_hint: "SAFETY SIGNALS",

    topic2_full: "Maternal & Child Medication Safety",
    topic2_d: "Using healthcare big data, we evaluate how medication exposure affects pregnancy outcomes and child health in pregnant women and children, who are excluded from clinical trials.",
    topic2_kw1: "Medication exposure in pregnancy",
    topic2_kw2: "Congenital malformations & pregnancy outcomes",
    topic2_kw3: "Pediatric medication safety",
    topic2_kw4: "Life-course perspective",
    topic2_ref1: "Benzodiazepines and congenital malformations (PLoS Medicine, 2022)",
    topic2_ref2: "Acid-suppressive medications and allergic diseases in children (JAMA Pediatrics, 2023)",

    // Research Network Topic 03
    topic3_short: "Perinatal & Pediatric Safety",
    topic3_subtitle: "PERINATAL & PEDIATRICS",
    topic3_hint: "MEDICATION SAFETY",

    topic3_full: "Causal Inference & Data Innovation",
    topic3_d: "We develop and validate methods such as target trial emulation, correction of time-related bias, and linkage of AI and multi-omics to generate credible causal evidence from observational data.",
    topic3_kw1: "Target trial emulation",
    topic3_kw2: "Time-related bias",
    topic3_kw3: "AI-based pharmacovigilance",
    topic3_kw4: "Multi-omics & data linkage",
    topic3_ref1: "Validating an approach to overcome immeasurable time bias (International Journal of Epidemiology, 2023)",

    // Research Network Topic 04
    topic4_short: "Regulatory Science & Healthcare Policy",
    topic4_subtitle: "REGULATORY & POLICY",
    topic4_hint: "HEALTHCARE POLICY",

    topic4_full: "Regulatory Science & Health Policy",
    topic4_d: "We evaluate the use of real-world evidence in approval and reimbursement, drug information and systems, and the effects of health programs to support evidence-based health policy.",
    topic4_kw1: "Regulatory use of real-world evidence",
    topic4_kw2: "Drug approval & labeling",
    topic4_kw3: "Reimbursement & access",
    topic4_kw4: "Health policy & systems",
    topic4_ref1: "Case analysis of FDA/EMA approvals using real-world evidence (Journal of Pharmacoepidemiology and Risk Management, 2022)",
    topic4_ref2: "Drug lag between Korea and Japan for new drugs (Therapeutic Innovation & Regulatory Science, 2020)",

    // ----------------------------------------------------------------------
    // 7. Contact Page
    // ----------------------------------------------------------------------
    contact_site_title: "Contact - Noh Lab",
    contact_title: "Location & Contact",
    contact_sub: "Location and contact details for the laboratory.",
    contact_office: "Laboratory Location",
    contact_addr: "College of Pharmacy Building 2, Chonnam National University, 77 Yongbong-ro, Buk-gu, Gwangju, Republic of Korea",
    contact_email: "Email Inquiry",
    map_kakao_btn: "Kakao Map Directions ↗",
    map_naver_btn: "Naver Map Directions ↗"
  }
};


// ==========================================================================
// JS 스크립트에서 번역 텍스트를 직접 가져오는 헬퍼 함수
// ==========================================================================

function getTrans(key) {

  const lang =
    localStorage.getItem("site_lang") || "ko";

  return (
    translations[lang]?.[key] ||
    translations["ko"]?.[key] ||
    key
  );
}


// ==========================================================================
// 페이지 로딩
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

  const currentLang =
    localStorage.getItem("site_lang") || "ko";

  setLanguage(currentLang);


  const langBtn =
    document.getElementById("lang-toggle-btn");

  if (langBtn) {

    langBtn.addEventListener("click", () => {

      const nextLang =
        localStorage.getItem("site_lang") === "en"
          ? "ko"
          : "en";

      setLanguage(nextLang);

    });

  }

});


// ==========================================================================
// 언어 변경 함수
// ==========================================================================

function setLanguage(lang) {

  localStorage.setItem("site_lang", lang);

  document.documentElement.lang = lang;


  // ------------------------------------------------------------------------
  // 일반 텍스트 변경 ([data-i18n])
  // ------------------------------------------------------------------------

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key =
      el.getAttribute("data-i18n");

    if (
      translations[lang] &&
      translations[lang][key]
    ) {

      el.textContent =
        translations[lang][key];

    }

  });


  // ------------------------------------------------------------------------
  // Placeholder 변경 ([data-i18n-placeholder])
  // ------------------------------------------------------------------------

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(el => {

      const key =
        el.getAttribute("data-i18n-placeholder");

      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        el.setAttribute(
          "placeholder",
          translations[lang][key]
        );

      }

    });


  // ------------------------------------------------------------------------
  // 토글 버튼 텍스트 변경
  // ------------------------------------------------------------------------

  const langBtn =
    document.getElementById("lang-toggle-btn");

  if (langBtn) {

    langBtn.textContent =
      lang === "ko"
        ? "EN"
        : "KO";

  }


  // ------------------------------------------------------------------------
  // 언어 변경 이벤트 발행
  // ------------------------------------------------------------------------

  window.dispatchEvent(
    new CustomEvent(
      "languageChanged",
      {
        detail: {
          lang: lang
        }
      }
    )
  );
}
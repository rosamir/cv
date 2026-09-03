/**
 * Amir Rosen - Executive Application Controller
 * High-performance UI interactivity, Canvas animations, AI Agent Engine, and Filters
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCanvas();
  initScrollProgress();
  renderStats();
  renderJourneyStations();
  renderTimeline();
  renderCompetencies();
  renderMediaHub();
  renderEducation();
  renderPersonalStory();
  initAIAssistant();
  initSearch();
  initScrollSpy();
  initScrollReveals();
  initIcons();
});

/* ==========================================================================
   Theme Management (Executive Dark / Luxury Light)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("amir_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButton(savedTheme);

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("amir_theme", nextTheme);
      updateThemeButton(nextTheme);
      showToast(nextTheme === "dark" ? "מצב תצוגה כהה (Executive Dark)" : "מצב תצוגה בהיר (Executive Light)");
    });
  }
}

function updateThemeButton(theme) {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (!themeToggleBtn) return;
  if (theme === "dark") {
    themeToggleBtn.innerHTML = `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i><span class="sr-only">מצב בהיר</span>`;
  } else {
    themeToggleBtn.innerHTML = `<i data-lucide="moon" class="w-5 h-5 text-slate-700"></i><span class="sr-only">מצב כהה</span>`;
  }
  initIcons();
}

/* ==========================================================================
   Scroll Progress Indicator
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/* ==========================================================================
   Stats Counter Grid
   ========================================================================== */
function renderStats() {
  const container = document.getElementById("stats-grid-container");
  if (!container || !window.CV_DATA) return;

  const stats = window.CV_DATA.personal.stats;
  container.innerHTML = stats.map(stat => `
    <div class="stat-card flex flex-col items-center justify-center p-4 rounded-xl">
      <div class="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
        <i data-lucide="${stat.icon}" class="w-5 h-5"></i>
      </div>
      <div class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-num tracking-tight mb-1">
        ${stat.value}
      </div>
      <div class="text-sm font-bold text-slate-200 text-center">${stat.label}</div>
      <div class="text-xs text-slate-400 text-center mt-0.5 line-clamp-1">${stat.sublabel}</div>
    </div>
  `).join("");
}

/* ==========================================================================
   Experience Timeline & Filter Engine
   ========================================================================== */
let activeTimelineFilter = "all";
let allExpanded = false;

function renderTimeline(filter = "all", searchQuery = "") {
  const container = document.getElementById("timeline-container");
  if (!container || !window.CV_DATA) return;

  activeTimelineFilter = filter;
  let items = window.CV_DATA.experience;

  if (filter !== "all") {
    items = items.filter(item => {
      if (filter === "ai") return item.category === "ai" || item.tags.some(t => t.toLowerCase().includes("ai"));
      if (filter === "banking") return item.category === "banking" || item.category === "finance";
      if (filter === "retail") return item.category === "retail" || item.category === "vc";
      if (filter === "cloud") return item.category === "cloud" || item.category === "tech";
      if (filter === "defense") return item.category === "defense" || item.category === "telecom";
      return true;
    });
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    items = items.filter(item => 
      item.role.toLowerCase().includes(q) ||
      item.company.toLowerCase().includes(q) ||
      item.shortSummary.toLowerCase().includes(q) ||
      item.bullets.some(b => b.toLowerCase().includes(q)) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="glass-card p-8 text-center my-6">
        <i data-lucide="search-x" class="w-12 h-12 text-slate-500 mx-auto mb-3"></i>
        <h3 class="text-lg font-bold text-slate-200">לא נמצאו תוצאות תואמות</h3>
        <p class="text-sm text-slate-400 mt-1">נסה לשנות את מונח החיפוש או לבחור בקטגוריה אחרת.</p>
        <button onclick="resetTimelineFilters()" class="btn-secondary mt-4 text-xs py-2 px-4">
          איפוס סינון
        </button>
      </div>
    `;
    initIcons();
    return;
  }

  container.innerHTML = items.map((item, idx) => {
    const isDefaultExpanded = allExpanded;

    return `
      <div class="timeline-card-wrapper relative pr-8 md:pr-12 mb-8 group" id="exp-${item.id}">
        <div class="timeline-dot"></div>
        <div class="glass-card p-5 md:p-7 transition-all">
          
          <!-- Header Area -->
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="badge-executive text-xs font-bold font-num bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                  ${item.period}
                </span>
                <span class="badge-executive text-xs font-bold ${item.category === 'ai' ? 'badge-emerald' : 'badge-gold'} px-2.5 py-0.5 rounded-full">
                  ${item.badge}
                </span>
                ${item.directReport ? `
                  <span class="text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <i data-lucide="sparkles" class="w-3 h-3"></i>
                    ${item.directReport}
                  </span>
                ` : ''}
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight">${item.role}</h3>
              <div class="text-base font-semibold text-cyan-400 flex items-center gap-2 mt-1">
                <i data-lucide="building-2" class="w-4 h-4 text-slate-400"></i>
                ${item.company}
                <span class="text-xs text-slate-400 font-normal">(${item.companyType})</span>
              </div>
            </div>

            <div class="flex items-center gap-2 self-start md:self-auto no-print">
              <button onclick="toggleAccordion('${item.id}')" 
                class="accordion-toggle-btn timeline-detail-control"
                id="btn-toggle-${item.id}">
                <span class="detail-symbol" id="symbol-toggle-${item.id}" aria-hidden="true">${isDefaultExpanded ? '−' : '+'}</span>
                <span id="txt-toggle-${item.id}">${isDefaultExpanded ? 'צמצם פירוט' : 'פירוט מלא'}</span>
              </button>
            </div>
          </div>

          <!-- Expandable Deep-Dive Bullets -->
          <div class="accordion-content ${isDefaultExpanded ? 'expanded' : ''}" id="content-${item.id}">
            <div class="timeline-detail pt-5 mt-5 border-t border-white/10 space-y-4">
              <div class="timeline-summary text-sm text-slate-300 leading-relaxed">
                <strong class="text-slate-100 font-semibold">תמצית מנהלים: </strong>${item.shortSummary}
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${item.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join("")}
              </div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
                אחריות מלאה, תהליכים והישגים מפורטים:
              </h4>
              <ul class="space-y-2.5 pr-2">
                ${item.bullets.map(bullet => `
                  <li class="text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>${bullet}</span>
                  </li>
                `).join("")}
              </ul>

              <!-- Related Press & Social Links for this role -->
              ${item.links && item.links.length > 0 ? `
                <div class="mt-6 pt-4 border-t border-white/10">
                  <h5 class="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-3">
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                    סיקור תקשורתי, ראיונות וקישורים רלוונטיים לתפקיד זה:
                  </h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${item.links.map(l => `
                      <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="media-card p-3.5 flex flex-col justify-between group/link">
                        <div>
                          <div class="flex items-center justify-between gap-2 mb-1.5">
                            <span class="media-badge-source text-[11px] font-bold ${l.type === 'press' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'}">
                              ${l.source}
                            </span>
                            <span class="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">
                              ${l.badge}
                            </span>
                          </div>
                          <div class="text-sm font-bold text-slate-100 group-hover/link:text-cyan-400 transition-colors line-clamp-2">
                            ${l.title}
                          </div>
                          <div class="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            ${l.desc}
                          </div>
                        </div>
                        <div class="flex items-center gap-1 text-xs font-bold text-cyan-400 mt-3 pt-2 border-t border-white/5">
                          <span>קרא כתבה / צפה בפוסט</span>
                          <i data-lucide="arrow-left" class="w-3.5 h-3.5 transition-transform group-hover/link:-translate-x-1"></i>
                        </div>
                      </a>
                    `).join("")}
                  </div>
                </div>
              ` : ''}

            </div>
          </div>

        </div>
      </div>
    `;
  }).join("");

  initIcons();
  requestAnimationFrame(initScrollReveals);
}

function renderJourneyStations() {
  const container = document.getElementById("journey-stations");
  if (!container || !window.CV_DATA) return;

  container.innerHTML = window.CV_DATA.experience.map((item, index) => `
    <button type="button" class="journey-station ${index === 0 ? 'is-current' : ''}" onclick="jumpToExperience('${item.id}')">
      <span class="journey-station-year">${item.period.split(" - ")[0]}</span>
      <span class="journey-station-company">${item.company.split(" (")[0]}</span>
    </button>
  `).join("");
}

window.jumpToExperience = function(id) {
  const target = document.getElementById(`exp-${id}`);
  if (!target) return;

  document.querySelectorAll(".journey-station").forEach(station => station.classList.remove("is-current"));
  const station = [...document.querySelectorAll(".journey-station")].find(item => item.getAttribute("onclick").includes(id));
  if (station) station.classList.add("is-current");

  target.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => {
    const content = document.getElementById(`content-${id}`);
    if (content && !content.classList.contains("expanded")) toggleAccordion(id);
  }, 550);
};

function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const symbol = document.getElementById(`symbol-toggle-${id}`);
  const txt = document.getElementById(`txt-toggle-${id}`);
  if (!content) return;

  if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    if (symbol) symbol.textContent = "+";
    if (txt) txt.textContent = "פירוט מלא";
  } else {
    content.classList.add("expanded");
    if (symbol) symbol.textContent = "−";
    if (txt) txt.textContent = "צמצם פירוט";
  }
}

function toggleAllAccordions() {
  allExpanded = !allExpanded;
  const masterBtn = document.getElementById("toggle-all-exp-btn");
  if (masterBtn) {
    masterBtn.innerHTML = allExpanded ? 
      `<i data-lucide="minimize-2" class="w-4 h-4"></i> סגור הכל` : 
      `<i data-lucide="maximize-2" class="w-4 h-4"></i> פתח פירוט מלא להכל`;
  }
  const items = window.CV_DATA.experience;
  items.forEach(item => {
    const content = document.getElementById(`content-${item.id}`);
    const symbol = document.getElementById(`symbol-toggle-${item.id}`);
    const txt = document.getElementById(`txt-toggle-${item.id}`);
    if (content) {
      if (allExpanded) {
        content.classList.add("expanded");
        if (symbol) symbol.textContent = "−";
        if (txt) txt.textContent = "צמצם פירוט";
      } else {
        content.classList.remove("expanded");
        if (symbol) symbol.textContent = "+";
        if (txt) txt.textContent = "פירוט מלא";
      }
    }
  });
  initIcons();
}

window.filterTimeline = function(category) {
  document.querySelectorAll(".timeline-filter-btn").forEach(btn => {
    if (btn.dataset.category === category) {
      btn.className = "timeline-filter-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20";
    } else {
      btn.className = "timeline-filter-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10";
    }
  });
  const searchInput = document.getElementById("timeline-search-input");
  const query = searchInput ? searchInput.value : "";
  renderTimeline(category, query);
};

window.resetTimelineFilters = function() {
  const searchInput = document.getElementById("timeline-search-input");
  if (searchInput) searchInput.value = "";
  filterTimeline("all");
};

function initSearch() {
  const searchInput = document.getElementById("timeline-search-input");
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
    renderTimeline(activeTimelineFilter, e.target.value);
  });
}

/* ==========================================================================
   Competencies Matrix
   ========================================================================== */
function renderCompetencies() {
  const container = document.getElementById("competencies-grid");
  if (!container || !window.CV_DATA) return;

  const list = window.CV_DATA.competencies;
  container.innerHTML = list.map(item => `
    <div class="glass-card p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
            <i data-lucide="${item.icon}" class="w-5 h-5"></i>
          </div>
          <h4 class="text-base font-bold text-slate-100">${item.name}</h4>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">
          ${item.desc}
        </p>
      </div>
      <div>
        <div class="flex justify-between text-xs font-bold text-slate-400 mb-1">
          <span>עומק מקצועי & ניסיון ביצועי</span>
          <span class="text-cyan-400 font-num">${item.level}%</span>
        </div>
        <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-1000" style="width: ${item.level}%"></div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   Media Hub & Social Proof (All 30 Links)
   ========================================================================== */
let activeMediaFilter = "all";

function renderMediaHub(filter = "all") {
  const container = document.getElementById("media-grid-container");
  if (!container || !window.CV_DATA) return;

  activeMediaFilter = filter;
  let items = window.CV_DATA.mediaHub;

  if (filter !== "all") {
    items = items.filter(item => item.category === filter);
  }

  container.innerHTML = items.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" 
      class="media-card flex flex-col justify-between p-4 group transition-all">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="media-badge-source text-[10px] font-bold ${
            item.category === 'press' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
            item.category === 'video' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
            item.category === 'social' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
            'bg-blue-500/20 text-blue-300 border border-blue-500/30'
          }">
            ${item.source}
          </span>
          ${item.date ? `<span class="text-[10px] font-bold text-slate-400 font-num">${item.date}</span>` : ''}
        </div>
        <h4 class="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
          ${item.title}
        </h4>
        <p class="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
          ${item.subtitle}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
        <div class="flex flex-wrap gap-1">
          ${item.tags.slice(0, 2).map(t => `
            <span class="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">#${t}</span>
          `).join("")}
        </div>
        <div class="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:underline">
          <span>צפייה</span>
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1"></i>
        </div>
      </div>
    </a>
  `).join("");

  initIcons();
}

window.filterMedia = function(category) {
  document.querySelectorAll(".media-filter-btn").forEach(btn => {
    if (btn.dataset.category === category) {
      btn.className = "media-filter-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20";
    } else {
      btn.className = "media-filter-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10";
    }
  });
  renderMediaHub(category);
};

/* ==========================================================================
   Education & Academic Mentorship
   ========================================================================== */
function renderEducation() {
  const containerEdu = document.getElementById("education-cards-container");
  const containerMentor = document.getElementById("mentorship-cards-container");
  if (!window.CV_DATA) return;

  const { education, academicAndMentoring } = window.CV_DATA.educationAndMentorship;

  if (containerEdu) {
    containerEdu.innerHTML = education.map(item => `
      <div class="glass-card p-5 flex items-start gap-4">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
          <i data-lucide="${item.icon}" class="w-6 h-6"></i>
        </div>
        <div>
          <span class="badge-executive text-xs font-bold font-num bg-white/5 text-slate-300 border border-white/10 px-2 py-0.5 rounded-md mb-1.5 inline-block">
            ${item.period}
          </span>
          <h4 class="text-base font-bold text-white">${item.degree}</h4>
          <div class="text-sm font-semibold text-cyan-400 mb-1">${item.institution}</div>
          <p class="text-xs text-slate-300 leading-relaxed">${item.details}</p>
        </div>
      </div>
    `).join("");
  }

  if (containerMentor) {
    containerMentor.innerHTML = academicAndMentoring.map(item => `
      <div class="glass-card p-5 flex flex-col justify-between">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <i data-lucide="${item.icon}" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="badge-executive text-xs font-bold font-num bg-white/5 text-slate-300 border border-white/10 px-2 py-0.5 rounded-md mb-1.5 inline-block">
              ${item.period}
            </span>
            <h4 class="text-base font-bold text-white">${item.role}</h4>
            <div class="text-sm font-semibold text-emerald-400 mb-1">${item.institution}</div>
            <p class="text-xs text-slate-300 leading-relaxed">${item.details}</p>
          </div>
        </div>

        ${item.links && item.links.length > 0 ? `
          <div class="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-2">
            ${item.links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener noreferrer" 
                class="text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all">
                <i data-lucide="external-link" class="w-3 h-3"></i>
                ${l.title}
              </a>
            `).join("")}
          </div>
        ` : ''}
      </div>
    `).join("");
  }
}

/* ==========================================================================
   Personal Story & Values Section
   ========================================================================== */
function renderPersonalStory() {
  const data = window.CV_DATA.personal.personalStory;
  if (!data) return;

  const photoEl = document.getElementById("personal-photo-img");
  if (photoEl) {
    photoEl.src = data.image;
    photoEl.alt = data.imageAlt;
  }

  const textContainer = document.getElementById("personal-story-paragraphs");
  if (textContainer) {
    textContainer.innerHTML = data.paragraphs.map(p => `
      <p class="text-sm md:text-base text-slate-300 leading-relaxed">${p}</p>
    `).join("");
  }

  const valuesContainer = document.getElementById("personal-values-grid");
  if (valuesContainer) {
    valuesContainer.innerHTML = data.values.map(val => `
      <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
        <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
          <i data-lucide="${val.icon}" class="w-4 h-4"></i>
        </div>
        <h5 class="text-sm font-bold text-white mb-1">${val.title}</h5>
        <p class="text-xs text-slate-300 leading-relaxed">${val.desc}</p>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   Interactive Executive AI Agent Engine
   ========================================================================== */
function initAIAssistant() {
  const modal = document.getElementById("ai-assistant-modal");
  const openBtns = document.querySelectorAll(".open-ai-modal-btn");
  const closeBtn = document.getElementById("close-ai-modal-btn");
  const chatForm = document.getElementById("ai-chat-form");
  const chatInput = document.getElementById("ai-chat-input");
  const messagesContainer = document.getElementById("ai-chat-messages");
  const chipsContainer = document.getElementById("ai-suggested-chips");

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      if (chatInput) chatInput.focus();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });

  // Render suggested prompt chips
  if (chipsContainer && window.CV_DATA) {
    const questions = window.CV_DATA.aiKnowledgeBase.map(item => item.question);
    chipsContainer.innerHTML = questions.slice(0, 5).map(q => `
      <button type="button" class="ai-suggested-chip" onclick="askAIPrompt('${q.replace(/'/g, "\\'")}')">
        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-cyan-400"></i>
        <span>${q}</span>
      </button>
    `).join("");
    initIcons();
  }

  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = chatInput.value.trim();
      if (!q) return;
      chatInput.value = "";
      handleUserAIQuery(q);
    });
  }
}

window.askAIPrompt = function(promptText) {
  handleUserAIQuery(promptText);
};

function handleUserAIQuery(query) {
  const messagesContainer = document.getElementById("ai-chat-messages");
  if (!messagesContainer) return;

  // Add User Message Bubble
  const userBubble = document.createElement("div");
  userBubble.className = "ai-chat-bubble-user";
  userBubble.textContent = query;
  messagesContainer.appendChild(userBubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Typing indicator
  const typingBubble = document.createElement("div");
  typingBubble.className = "ai-chat-bubble-bot flex items-center gap-2 text-slate-400";
  typingBubble.id = "ai-typing-indicator";
  typingBubble.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
    <span class="text-xs">סוכן ה-AI של אמיר מעבד תשובה...</span>
  `;
  messagesContainer.appendChild(typingBubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Find best match in knowledge base
  setTimeout(() => {
    const indicator = document.getElementById("ai-typing-indicator");
    if (indicator) indicator.remove();

    const response = matchAIResponse(query);
    const botBubble = document.createElement("div");
    botBubble.className = "ai-chat-bubble-bot";
    botBubble.innerHTML = `
      <div class="flex items-center gap-1.5 text-xs font-bold text-cyan-400 mb-1.5">
        <i data-lucide="bot" class="w-3.5 h-3.5"></i>
        <span>סוכן ה-AI הניהולי של אמיר רוזן</span>
      </div>
      <div class="text-sm leading-relaxed">${response}</div>
    `;
    messagesContainer.appendChild(botBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    initIcons();
  }, 450);
}

function matchAIResponse(query) {
  const qLower = query.toLowerCase();
  const kb = window.CV_DATA.aiKnowledgeBase;

  let bestMatch = null;
  let maxMatches = 0;

  for (const item of kb) {
    let score = 0;
    for (const kw of item.keywords) {
      if (qLower.includes(kw.toLowerCase())) {
        score++;
      }
    }
    if (score > maxMatches) {
      maxMatches = score;
      bestMatch = item;
    }
  }

  if (bestMatch && maxMatches > 0) {
    return bestMatch.answer;
  }

  // Fallback executive synthesis
  return `אמיר רוזן הינו מנהל טכנולוגי ועסקי בכיר (C-Level / CAIO) עם מעל 20 שנות ניסיון בהובלת יחידות ענק, טרנספורמציות AI ארגוניות (כולל דירוג בנק לאומי במקום ה-1 בישראל באימוץ AI), ניהול קרן הון סיכון (Irani Ventures) ואחריות P&L בהיקפי עשרות מיליוני שקלים. למידע ממוקד נוסף או לתיאום שיחה, ניתן לפנות ישירות לאמיר בטלפון 054-2435566 או בדוא״ל ros.amir@gmail.com.`;
}

/* ==========================================================================
   Ambient Neural Canvas Animation
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 70;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.8;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(6, 182, 212, 0.45)";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   Utility Helpers & Actions (Copy, Share, Print)
   ========================================================================== */
window.copyContactInfo = function(type, text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`הועתק בהצלחה: ${text}`);
  }).catch(() => {
    showToast("העתקה לא צלחה");
  });
};

window.printResume = function() {
  allExpanded = true;
  toggleAllAccordions();
  setTimeout(() => {
    window.print();
  }, 250);
};

window.shareProfile = function() {
  if (navigator.share) {
    navigator.share({
      title: "אמיר רוזן - קורות חיים ופורטפוליו מנהלים (C-Level & CAIO)",
      text: "צפו בפרופיל המנהלים של אמיר רוזן - Chief AI Officer ומוביל טרנספורמציות טכנולוגיות וחדשנות עסקית.",
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("קישור לאתר הועתק ללוח!");
  }
};

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.innerHTML = `
    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  initIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const dockLinks = document.querySelectorAll(".dock-btn[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    dockLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

function initScrollReveals() {
  const targets = document.querySelectorAll("main > section, .timeline-card-wrapper");
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    target.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
    observer.observe(target);
  });
}

function initIcons() {
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
}

const SESSION_KEY = "demo_session_end";
const SESSION_DURATION_MS = 60 * 60 * 1000;
const EXTEND_MS = 15 * 60 * 1000;

const Session = {
  start() {
    localStorage.setItem(SESSION_KEY, String(Date.now() + SESSION_DURATION_MS));
    this.render();
  },

  extend() {
    const end = this.endAt();
    if (!end) return;
    localStorage.setItem(SESSION_KEY, String(end + EXTEND_MS));
    this.render();
  },

  endAt() {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const end = Number(raw);
    return end > Date.now() ? end : null;
  },

  isActive() {
    return this.endAt() !== null;
  },

  remaining() {
    const end = this.endAt();
    return end ? Math.floor((end - Date.now()) / 1000) : 0;
  },

  format(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  },

  render() {
    const btn = document.getElementById("sessionBtn");
    const banner = document.getElementById("sessionBanner");
    const startBtn = document.getElementById("startSession");
    const timeEls = [
      { el: document.getElementById("sessionTime"), onExpire: "--:--" },
      { el: document.getElementById("bannerTime"), onExpire: "00:00" },
    ];

    if (!btn || !banner) return;

    const active = this.isActive();
    btn.classList.toggle("hidden", !active);
    banner.classList.toggle("hidden", !active);
    if (startBtn) {
      startBtn.innerHTML = active
        ? `<svg class="flat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.9-.9"/></svg> Accès découverte actif`
        : `<svg class="flat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg> Démarrer l'accès découverte (1h)`;
      startBtn.disabled = active;
    }
    document.body.classList.toggle("session-active", active);

    const tick = () => {
      if (!this.isActive()) {
        timeEls.forEach(({ el, onExpire }) => { if (el) el.textContent = onExpire; });
        document.body.classList.remove("session-active");
        btn.classList.add("hidden");
        banner.classList.add("hidden");
        if (startBtn) {
          startBtn.innerHTML = `<svg class="flat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg> Démarrer l'accès découverte (1h)`;
          startBtn.disabled = false;
        }
        return;
      }
      const t = this.format(this.remaining());
      timeEls.forEach(({ el }) => { if (el) el.textContent = t; });
      setTimeout(tick, 1000);
    };
    tick();
  },

  init() {
    const startBtn = document.getElementById("startSession");
    const extendBtn = document.getElementById("extendBtn");
    if (startBtn) startBtn.addEventListener("click", () => this.start());
    if (extendBtn) extendBtn.addEventListener("click", () => this.extend());
    this.render();
  },
};

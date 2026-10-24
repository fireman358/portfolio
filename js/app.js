document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("appGrid");
  if (grid) {
    grid.innerHTML = APPS.map((app) => `
      <article class="card" data-id="${app.id}">
        <div class="card-media" data-screenshot="${app.screenshot || ""}">
          <img src="${app.screenshot}" alt="Capture d'écran de ${app.name}" loading="lazy"
               onerror="this.parentElement.classList.add('no-img'); this.remove();" />
          <div class="media-fallback"><span>${app.icon}</span></div>
          <div class="media-overlay">
            <p>${app.description}</p>
            <span class="overlay-cta">Cliquez pour tester <svg class="flat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
          </div>
        </div>
        <div class="card-body">
          <h3>${app.name}</h3>
          <div class="card-tags">${app.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <button class="btn primary small try-btn" data-url="${app.url}" title="Ouvre l'application dans un nouvel onglet">Tester l'appli <svg class="flat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".card-media img").forEach((img) => {
      img.addEventListener("load", () => {
        img.parentElement.classList.add("has-img");
      });
    });

    grid.querySelectorAll(".card-media").forEach((media) => {
      media.addEventListener("click", () => {
        const btn = media.closest(".card").querySelector(".try-btn");
        btn.click();
      });
    });

    grid.querySelectorAll(".try-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!Session.isActive()) {
          const ok = confirm(
            "Votre session découverte a expiré.\n\n" +
            "Relancer une session d'1 heure pour ouvrir cette application ?"
          );
          if (!ok) return;
          Session.start();
        }
        window.open(btn.dataset.url, "_blank", "noopener");
      });
    });
  }

  const serviceGrid = document.getElementById("serviceGrid");
  if (serviceGrid && typeof SERVICES !== "undefined") {
    serviceGrid.innerHTML = SERVICES.map((s) => `
      <article class="card service-card" data-id="${s.id}">
        <div class="card-media no-img">
          <div class="media-fallback"><span>${s.icon}</span></div>
          <div class="media-overlay">
            <p>${s.description}</p>
            <span class="overlay-cta">En savoir plus <svg class="flat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
          </div>
        </div>
        <div class="card-body">
          <h3>${s.name} <span class="service-badge">service</span></h3>
          <div class="card-tags">${s.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <a class="btn primary small" href="${s.link}"><svg class="flat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg> Découvrir les cours</a>
        </div>
      </article>
    `).join("");
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  Session.init();
});

// Révélation du numéro de téléphone (anti-spam, maquette Jonathan)
document.querySelectorAll(".reveal-phone").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    try { el.textContent = atob(el.dataset.n) + " (David)"; } catch (err) {}
    el.classList.add("revealed");
    el.removeAttribute("href");
  });
});

// Révélation de l'email (anti-spam)
document.querySelectorAll(".reveal-mail").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    try {
      const mail = atob(el.dataset.m);
      const subject = el.dataset.subject ? "?subject=" + encodeURIComponent(el.dataset.subject) : "";
      el.href = "mailto:" + mail + subject;
      el.querySelector(".way-hint").textContent = mail;
      el.classList.add("revealed");
    } catch (err) {}
  });
});

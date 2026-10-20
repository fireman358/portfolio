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
            <span class="overlay-cta">Cliquez pour tester →</span>
          </div>
        </div>
        <div class="card-body">
          <h3>${app.name}</h3>
          <div class="card-tags">${app.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <button class="btn primary small try-btn" data-url="${app.url}" title="Ouvre l'application dans un nouvel onglet">🔓 Tester l'appli</button>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".card-media img").forEach((img) => {
      img.addEventListener("load", () => {
        img.parentElement.classList.add("has-img");
      });
    });

    grid.querySelectorAll(".try-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!Session.isActive()) {
          const ok = confirm(
            "⏳ Votre session découverte a expiré.\n\n" +
            "Relancer une session d'1 heure pour ouvrir cette application ?"
          );
          if (!ok) return;
          Session.start();
        }
        window.open(btn.dataset.url, "_blank", "noopener");
      });
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  Session.init();
});

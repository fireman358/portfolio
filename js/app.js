document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("appGrid");
  if (grid) {
    grid.innerHTML = APPS.map((app) => `
      <article class="card" data-id="${app.id}">
        <div class="card-icon">${app.icon}</div>
        <h3>${app.name}</h3>
        <p>${app.description}</p>
        <div class="card-tags">${app.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="btn primary small try-btn" data-url="${app.url}" title="Ouvre l'application dans un nouvel onglet">🔓 Tester l'appli</button>
        </div>
      </article>
    `).join("");

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

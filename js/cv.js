document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cvName").textContent = CV.name;
  document.getElementById("cvRole").textContent = CV.role;
  document.getElementById("cvLoc").textContent = `📍 ${CV.location}`;
  document.getElementById("cvSummary").textContent = CV.summary;

  document.getElementById("cvBadges").innerHTML = CV.badges
    .map((b) => `<span class="badge">${b}</span>`)
    .join("");

  document.getElementById("skillsList").innerHTML = CV.skills
    .map(
      (s) => `
      <div class="skill">
        <div class="skill-head"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="bar"><div class="bar-fill" style="width:${s.level}%"></div></div>
      </div>`
    )
    .join("");

  document.getElementById("certsList").innerHTML = CV.certifications
    .map(
      (c) => `<li>
        <span class="cert-title">${c.title}</span>
        <span class="cert-org">${c.org}${c.date ? " · " + c.date : ""}</span>
      </li>`
    )
    .join("");

  document.getElementById("timeline").innerHTML = CV.timeline
    .map(
      (t) => `<li>
        <span class="year">${t.year}</span>
        <div class="tl-body">
          <p class="tl-title">${t.title}${t.org ? ` — <span class="tl-org">${t.org}</span>` : ""}</p>
          <p class="tl-text">${t.text}</p>
        </div>
      </li>`
    )
    .join("");

  document.getElementById("softList").innerHTML = CV.soft
    .map(
      (s) => `
      <div class="soft-card">
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>`
    )
    .join("");

  document.getElementById("creativeIntro").textContent = CV.creative.intro;
  document.getElementById("creativeList").innerHTML = CV.creative.items
    .map(
      (i) => `
      <div class="soft-card">
        <div class="soft-icon">${i.icon}</div>
        <h3>${i.title}</h3>
        <p>${i.text}</p>
        ${i.link ? `<a class="btn primary small" href="${i.link}" target="_blank" rel="noopener">${i.linkLabel || "Découvrir"}</a>` : ""}
      </div>`
    )
    .join("");

  // Section cours (seulement si présente sur la page)
  const t = CV.teaching;
  const ti = document.getElementById("teachingIntro");
  if (ti && t) {
    document.querySelector(".teaching-section h2").textContent = "Former & transmettre — " + t.title.split(" &")[0];
    ti.textContent = t.intro;
    document.getElementById("teachingProof").textContent = t.proof;
    document.getElementById("teachingModules").innerHTML = t.modules.map((m) => `
      <div class="teach-card">
        <div class="teach-icon">${m.icon}</div>
        <h3>${m.title}${m.spec ? ` <span class="spec-tag">${m.spec}</span>` : ""}</h3>
        <p>${m.text}</p>
      </div>
    `).join("");
    document.getElementById("teachingPractical").textContent = "📍 " + t.practical;
    const sp = document.getElementById("superprofLink");
    sp.href = t.superprof.link;
    sp.title = t.superprof.label + " — " + t.superprof.detail;
  }

  document.getElementById("langList").innerHTML = CV.languages
    .map((l) => `<li><strong>${l.name}</strong> — ${l.level}</li>`)
    .join("");

  document.getElementById("hobbies").innerHTML = `🎯 ${CV.hobbies}`;

  document.getElementById("year").textContent = new Date().getFullYear();
});

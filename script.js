(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const iconInstagram = () => {
    const span = document.createElement("span");
    span.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></svg>';
    return span.firstElementChild;
  };
  const iconLinkedIn = () => {
    const span = document.createElement("span");
    span.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.6"/><line x1="7.5" y1="10" x2="7.5" y2="16.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="7.5" cy="7" r="0.9" fill="currentColor"/><path d="M11.5 16.5V10M11.5 12.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
    return span.firstElementChild;
  };
  const iconBehance = () => {
    const span = document.createElement("span");
    span.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><text x="2" y="17" font-size="14" font-family="Arial, sans-serif" fill="currentColor">Be</text></svg>';
    return span.firstElementChild;
  };
  const iconMail = () => {
    const span = document.createElement("span");
    span.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 6.5L12 13L20 6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    return span.firstElementChild;
  };

  function renderNav() {
    $("navMark").textContent = CV.brand.name;
    const links = $("navLinks");
    CV.nav.links.forEach((l) => {
      const a = el("a", "", l.label);
      a.href = l.href;
      links.appendChild(a);
    });
  }

  function renderHero() {
    $("heroEyebrow").textContent = CV.hero.eyebrow;
    $("heroName").textContent = CV.hero.name;
    $("heroTagline").textContent = CV.hero.tagline;
    $("heroLocation").textContent = CV.hero.location;

    const img = $("heroPortrait");
    img.src = CV.hero.portrait.src;
    img.alt = CV.hero.portrait.alt;

    const ctas = $("heroCtas");
    const primary = el("a", "btn btn--primary", CV.hero.ctaPrimary.label);
    primary.href = CV.hero.ctaPrimary.href;
    if (CV.hero.ctaPrimary.download) primary.setAttribute("download", "");
    const secondary = el("a", "btn btn--ghost", CV.hero.ctaSecondary.label);
    secondary.href = CV.hero.ctaSecondary.href;
    ctas.append(primary, secondary);

    const social = $("heroSocial");
    const insta = el("a");
    insta.href = CV.contact.instagramUrl;
    insta.target = "_blank";
    insta.rel = "noopener";
    insta.setAttribute("aria-label", "Instagram");
    insta.appendChild(iconInstagram());
    const linkedin = el("a");
    linkedin.href = CV.contact.linkedinUrl;
    linkedin.target = "_blank";
    linkedin.rel = "noopener";
    linkedin.setAttribute("aria-label", "LinkedIn");
    linkedin.appendChild(iconLinkedIn());
    const behance = el("a");
    behance.href = CV.contact.behanceUrl;
    behance.target = "_blank";
    behance.rel = "noopener";
    behance.setAttribute("aria-label", "Behance");
    behance.appendChild(iconBehance());
    social.append(insta, linkedin, behance);
  }

  function renderAbout() {
    $("aboutEyebrow").textContent = CV.about.eyebrow;
    $("aboutTitle").textContent = CV.about.title;
    const body = $("aboutBody");
    CV.about.paragraphs.forEach((p) => body.appendChild(el("p", "", p)));
    const interests = $("aboutInterests");
    CV.about.interests.forEach((i) => interests.appendChild(el("span", "pill", i)));
  }

  function renderExperience() {
    $("experienceEyebrow").textContent = CV.experience.eyebrow;
    $("experienceTitle").textContent = CV.experience.title;
    const timeline = $("experienceTimeline");
    CV.experience.roles.forEach((r) => {
      const item = el("div", "timeline__item reveal");
      const period = el("span", "timeline__period", r.period);
      const body = el("div");
      body.appendChild(el("h3", "timeline__title", r.title));
      body.appendChild(el("p", "timeline__meta", `${r.org} — ${r.location}`));
      item.append(period, body);
      timeline.appendChild(item);
    });
  }

  function renderDiving() {
    $("divingEyebrow").textContent = CV.diving.eyebrow;
    $("divingTitle").textContent = CV.diving.title;
    const grid = $("divingGrid");
    CV.diving.roles.forEach((r) => {
      const card = el("div", "role-card reveal");
      const head = el("div", "role-card__head");
      head.appendChild(el("h3", "role-card__title", r.title));
      head.appendChild(el("span", "role-card__period", r.period));
      card.appendChild(head);
      card.appendChild(el("p", "role-card__meta", `${r.org} — ${r.location}`));
      if (r.bullets && r.bullets.length) {
        const ul = el("ul", "role-card__bullets");
        r.bullets.forEach((b) => ul.appendChild(el("li", "", b)));
        card.appendChild(ul);
      }
      grid.appendChild(card);
    });
  }

  function renderCertifications() {
    $("certsEyebrow").textContent = CV.certifications.eyebrow;
    $("certsTitle").textContent = CV.certifications.title;
    const grid = $("certsGrid");
    CV.certifications.items.forEach((c) => {
      const card = el("div", "cert-card reveal");
      card.appendChild(el("span", "cert-card__name", c.name));
      card.appendChild(el("span", "cert-card__date", c.date));
      grid.appendChild(card);
    });
  }

  function renderSkills() {
    $("skillsEyebrow").textContent = CV.skills.eyebrow;
    $("skillsTitle").textContent = CV.skills.title;
    const grid = $("skillsGrid");
    CV.skills.items.forEach((s) => grid.appendChild(el("span", "pill", s)));
  }

  function renderEducation() {
    $("eduEyebrow").textContent = CV.education.eyebrow;
    $("eduTitle").textContent = CV.education.title;
    const list = $("eduList");
    CV.education.items.forEach((e) => {
      const card = el("div", "edu-card reveal");
      card.appendChild(el("h3", "edu-card__degree", e.degree));
      card.appendChild(el("p", "edu-card__school", e.school));
      card.appendChild(el("p", "edu-card__meta", `${e.period} · ${e.detail}`));
      list.appendChild(card);
    });
  }

  function renderLanguages() {
    $("langEyebrow").textContent = CV.languages.eyebrow;
    $("langTitle").textContent = CV.languages.title;
    const list = $("langList");
    CV.languages.items.forEach((l) => {
      const item = el("div", "lang-item reveal");
      const head = el("div", "lang-item__head");
      head.appendChild(el("span", "lang-item__name", l.name));
      head.appendChild(el("span", "lang-item__level", l.level));
      const track = el("div", "lang-item__track");
      const fill = el("div", "lang-item__fill");
      fill.dataset.value = l.value;
      track.appendChild(fill);
      item.append(head, track);
      list.appendChild(item);
    });
  }

  function renderCreative() {
    $("creativeEyebrow").textContent = CV.creative.eyebrow;
    $("creativeTitle").textContent = CV.creative.title;
    const body = $("creativeBody");
    const r = CV.creative.role;
    body.appendChild(el("h3", "creative__role-title", r.title));
    body.appendChild(el("p", "creative__role-meta", `${r.org} — ${r.location} · ${r.period}`));
    const ul = el("ul", "creative__bullets");
    r.bullets.forEach((b) => ul.appendChild(el("li", "", b)));
    body.appendChild(ul);

    const project = el("div", "creative__project");
    project.appendChild(el("span", "creative__project-label", "Personal Project"));
    project.appendChild(el("p", "creative__project-name", CV.creative.project.name));
    project.appendChild(el("p", "creative__project-note", CV.creative.project.note));
    body.appendChild(project);

    const link = el("a", "creative__link", "View Behance Portfolio →");
    link.href = CV.creative.behanceUrl;
    link.target = "_blank";
    link.rel = "noopener";
    body.appendChild(link);
  }

  function renderContact() {
    $("contactEyebrow").textContent = CV.contact.eyebrow;
    $("contactTitle").textContent = CV.contact.title;
    $("contactCopy").textContent = CV.contact.copy;

    const grid = $("contactGrid");
    const makeItem = (label, value, href, icon) => {
      const item = el("div", "contact__item");
      item.appendChild(el("span", "contact__item-label", label));
      const valueEl = href ? el("a", "contact__item-value") : el("span", "contact__item-value");
      valueEl.textContent = value;
      if (href) {
        valueEl.href = href;
        if (href.startsWith("http")) {
          valueEl.target = "_blank";
          valueEl.rel = "noopener";
        }
      }
      item.appendChild(valueEl);
      grid.appendChild(item);
    };
    makeItem("Email", CV.contact.email, `mailto:${CV.contact.email}`);
    makeItem("Phone", CV.contact.phone, `tel:${CV.contact.phone.replace(/\s/g, "")}`);
    makeItem("Location", CV.contact.location, null);
    makeItem("LinkedIn", "linkedin.com/in/omar-sherif-adv", CV.contact.linkedinUrl);
    makeItem("Behance", "behance.net/omaradv", CV.contact.behanceUrl);
    makeItem("Instagram", "@omar_ssherif", CV.contact.instagramUrl);

    const dl = $("contactDownload");
    dl.textContent = CV.hero.ctaPrimary.label;
    dl.href = CV.hero.ctaPrimary.href;
    dl.setAttribute("download", "");
  }

  function renderFooter() {
    $("footerMark").textContent = CV.brand.name;
    $("footerTagline").textContent = CV.footer.tagline;
    const links = $("footerLinks");
    const insta = el("a", "", "Instagram");
    insta.href = CV.contact.instagramUrl;
    insta.target = "_blank";
    insta.rel = "noopener";
    const linkedin = el("a", "", "LinkedIn");
    linkedin.href = CV.contact.linkedinUrl;
    linkedin.target = "_blank";
    linkedin.rel = "noopener";
    const mail = el("a", "", "Email");
    mail.href = `mailto:${CV.contact.email}`;
    links.append(insta, linkedin, mail);
    $("footerCopyright").textContent = `© ${new Date().getFullYear()} ${CV.hero.name}. All rights reserved.`;
  }

  /* ---------------- Interactions ---------------- */

  function initNavScroll() {
    const nav = $("nav");
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        nav.classList.toggle("is-scrolled", window.scrollY > 40);
        ticking = false;
      });
    });
  }

  function initMobileNav() {
    const toggle = $("navToggle");
    const links = $("navLinks");
    if (!toggle || !links) return;
    const close = () => { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); };
    const open = () => { links.classList.add("is-open"); toggle.setAttribute("aria-expanded", "true"); };
    toggle.addEventListener("click", () => {
      links.classList.contains("is-open") ? close() : open();
    });
    links.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  function initCursor() {
    const cursor = $("cursor");
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    window.addEventListener("mousemove", (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button")) cursor.classList.add("is-active");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button")) cursor.classList.remove("is-active");
    });
  }

  function initReveals() {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Animate language bars once their row is visible.
            const fill = entry.target.querySelector(".lang-item__fill");
            if (fill) fill.style.width = `${fill.dataset.value}%`;
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((item) => io.observe(item));
  }

  function init() {
    document.title = CV.meta.siteName;
    renderNav();
    renderHero();
    renderAbout();
    renderExperience();
    renderDiving();
    renderCertifications();
    renderSkills();
    renderEducation();
    renderLanguages();
    renderCreative();
    renderContact();
    renderFooter();

    initNavScroll();
    initMobileNav();
    initCursor();
    initReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

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

  /* ============================================================
     OCEAN SCENE — canvas particles + drifting marine-life
     silhouettes, confined to the hero. Pauses when the hero is
     scrolled out of view and goes fully static under
     prefers-reduced-motion.
     ============================================================ */
  function initOceanScene() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = $("oceanCanvas");
    const hero = $("hero");
    if (!canvas || !hero) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf = null;
    let visible = true;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const w = hero.clientWidth;
      const h = hero.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const isMobile = w < 640;
      const density = isMobile ? 26000 : 15000;
      const count = Math.round((w * h) / density);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.5,
        speed: Math.random() * 0.35 + 0.08,
        drift: (Math.random() - 0.5) * 0.15,
        o: Math.random() * 0.5 + 0.15,
      }));
    }

    function draw() {
      const w = hero.clientWidth;
      const h = hero.clientHeight;
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.fillStyle = `rgba(180, 226, 220, ${p.o})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      if (visible && !reduceMotion) raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (!reduceMotion) {
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) draw();
      });
      io.observe(hero);
      draw();
    } else {
      // Still render one static frame so the hero doesn't look empty.
      draw();
    }

    buildSilhouettes();
  }

  // Simple, elegant, low-opacity silhouette shapes — deliberately not
  // photorealistic 3D models (none are available in this project), but
  // smooth and recognizable rather than blocky or cartoonish.
  const SILHOUETTE_PATHS = {
    dolphin:
      '<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10,52 C30,22 72,10 102,20 C120,26 130,15 142,9 C134,22 129,30 131,36 C152,39 172,48 192,46 C172,54 151,59 133,57 C138,66 144,74 152,81 C132,75 117,64 109,55 C90,67 58,68 38,60 C54,55 67,48 73,40 C54,45 30,45 10,52 Z"/></svg>',
    shark:
      '<svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M4,56 C42,30 92,19 142,25 C161,14 176,5 186,8 C179,18 173,26 173,32 C192,36 209,44 218,50 C200,55 182,55 168,50 C171,60 177,70 187,79 C169,73 155,62 149,53 C120,63 79,65 49,58 C60,52 68,46 72,40 C50,45 24,49 4,56 Z"/></svg>',
    school:
      '<svg viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M6,30 C10,22 22,22 26,30 C22,38 10,38 6,30 Z"/><path d="M40,18 C44,10 56,10 60,18 C56,26 44,26 40,18 Z"/><path d="M46,42 C50,34 62,34 66,42 C62,50 50,50 46,42 Z"/><path d="M92,26 C96,18 108,18 112,26 C108,34 96,34 92,26 Z"/><path d="M120,10 C124,2 136,2 140,10 C136,18 124,18 120,10 Z"/></g></svg>',
  };

  function buildSilhouettes() {
    const host = $("oceanSilhouettes");
    if (!host || host.childElementCount) return;
    const configs = [
      { type: "dolphin", cls: "", top: "18%", w: 130, h: 65, duration: 46, delay: -6, reverse: false },
      { type: "shark", cls: " ocean__silhouette--secondary", top: "52%", w: 150, h: 62, duration: 58, delay: -20, reverse: true },
      { type: "school", cls: " ocean__silhouette--tertiary", top: "34%", w: 110, h: 42, duration: 38, delay: -12, reverse: false },
    ];
    configs.forEach((c) => {
      const wrap = document.createElement("div");
      wrap.className = `ocean__silhouette${c.cls}`;
      wrap.style.top = c.top;
      wrap.style.width = c.w + "px";
      wrap.style.height = c.h + "px";
      wrap.style.animationDuration = c.duration + "s";
      wrap.style.animationDelay = c.delay + "s";
      wrap.style.animationName = c.reverse ? "driftAcrossReverse" : "driftAcross";
      wrap.innerHTML = SILHOUETTE_PATHS[c.type];
      host.appendChild(wrap);
    });
  }

  /* ============================================================
     AMBIENT AUDIO — synthesized entirely in-browser via the Web
     Audio API (filtered noise + a slow, deep oscillator), so
     there's no external audio file that can go missing or fail
     to load after deployment. Never autoplays: audio only ever
     starts inside a real user-gesture handler.
     ============================================================ */
  const AUDIO_PREF_KEY = "omarcv_audio_pref";
  let audioCtx = null;
  let audioNodes = null;
  let audioIsOn = false;

  function buildAudioGraph(ctx) {
    // Filtered brown-noise bed for a soft underwater "whoosh".
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 400;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.05;

    // A slow, deep hum for underwater depth.
    const hum = ctx.createOscillator();
    hum.type = "sine";
    hum.frequency.value = 60;
    const humGain = ctx.createGain();
    humGain.gain.value = 0.02;

    // Slow LFO breathing the filter for a natural, non-static feel.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 120;
    lfo.connect(lfoGain);
    lfoGain.connect(noiseFilter.frequency);

    const master = ctx.createGain();
    master.gain.value = 0; // ramped up only after an explicit user click

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    hum.connect(humGain);
    humGain.connect(master);
    master.connect(ctx.destination);

    noise.start();
    hum.start();
    lfo.start();

    return { master, noise, hum, lfo };
  }

  function setAudioUI(on) {
    const btn = $("audioToggle");
    const label = $("audioToggleLabel");
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? "Turn ambient underwater sound off" : "Turn ambient underwater sound on");
    label.textContent = on ? "Sound On" : "Sound Off";
  }

  function turnAudioOn() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return; // Web Audio unsupported — button stays a harmless no-op.
      audioCtx = new AC();
      audioNodes = buildAudioGraph(audioCtx);
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    const now = audioCtx.currentTime;
    audioNodes.master.gain.cancelScheduledValues(now);
    audioNodes.master.gain.setValueAtTime(audioNodes.master.gain.value, now);
    audioNodes.master.gain.linearRampToValueAtTime(1, now + 0.8);
    audioIsOn = true;
    setAudioUI(true);
    try { localStorage.setItem(AUDIO_PREF_KEY, "on"); } catch (e) {}
  }

  function turnAudioOff() {
    audioIsOn = false;
    setAudioUI(false);
    try { localStorage.setItem(AUDIO_PREF_KEY, "off"); } catch (e) {}
    if (!audioCtx || !audioNodes) return;
    const now = audioCtx.currentTime;
    audioNodes.master.gain.cancelScheduledValues(now);
    audioNodes.master.gain.setValueAtTime(audioNodes.master.gain.value, now);
    audioNodes.master.gain.linearRampToValueAtTime(0, now + 0.4);
  }

  function initAudio() {
    const btn = $("audioToggle");
    if (!btn) return;

    let storedPref = null;
    try { storedPref = localStorage.getItem(AUDIO_PREF_KEY); } catch (e) {}

    let armedListeners = [];
    function disarmAutoStart() {
      armedListeners.forEach(([evt, fn]) => window.removeEventListener(evt, fn));
      armedListeners = [];
    }

    btn.addEventListener("click", () => {
      // An explicit click on the toggle is the user's own decision — it
      // always wins, so cancel any pending "resume on next interaction"
      // listener to avoid the two colliding on this same click.
      disarmAutoStart();
      if (audioIsOn) turnAudioOff();
      else turnAudioOn();
    });

    if (storedPref === "on") {
      // Reflect the remembered choice in the UI immediately on load —
      // this does NOT create an AudioContext or play anything yet, it's
      // purely visual until a genuine user gesture occurs.
      audioIsOn = true;
      setAudioUI(true);

      // On the next real interaction anywhere on the page (other than the
      // toggle itself, which is handled above), actually start the audio.
      // Still a genuine user gesture — never true autoplay.
      const armOnce = (e) => {
        if (e.target && e.target.closest && e.target.closest("#audioToggle")) return;
        disarmAutoStart();
        turnAudioOn();
      };
      ["pointerdown", "keydown", "touchstart"].forEach((evt) => {
        window.addEventListener(evt, armOnce, { once: true, passive: true });
        armedListeners.push([evt, armOnce]);
      });
    }
  }

  /* ============================================================
     VISITOR COUNTER — SIMULATED ONLY. This is not connected to
     any real analytics or backend. It shows a plausible, slowly
     drifting number so the page feels alive, and nothing more.
     ============================================================ */
  const VISITOR_BASE_KEY = "omarcv_visitor_base";

  function initVisitorCounter() {
    const el = $("visitorCounterText");
    if (!el) return;

    let base;
    try {
      const stored = localStorage.getItem(VISITOR_BASE_KEY);
      base = stored ? parseInt(stored, 10) : null;
    } catch (e) {
      base = null;
    }
    if (!base || Number.isNaN(base)) {
      base = 24 + Math.floor(Math.random() * 40); // plausible starting figure
      try { localStorage.setItem(VISITOR_BASE_KEY, String(base)); } catch (e) {}
    }

    let current = base;
    const render = () => { el.textContent = `${current} people have viewed this CV`; };
    render();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // number still shown, just doesn't drift

    setInterval(() => {
      if (Math.random() < 0.6) {
        current += 1;
        try { localStorage.setItem(VISITOR_BASE_KEY, String(current)); } catch (e) {}
        render();
      }
    }, 9000 + Math.random() * 6000);
  }

  function init() {
    document.title = CV.meta.siteName;
    renderNav();
    renderHero();
    renderAbout();
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
    initOceanScene();
    initAudio();
    initVisitorCounter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

const phoneNumber = "xxxxx";

const header = document.querySelector("header");
const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
const heroVideo = document.querySelector(".hero-video-bg");

function playHeroVideo() {
  if (!heroVideo) return;
  heroVideo.muted = true;
  heroVideo.playsInline = true;

  const playAttempt = heroVideo.play();
  if (playAttempt?.catch) {
    playAttempt.catch(() => {
      heroVideo.load();
    });
  }
}

if (heroVideo) {
  if (heroVideo.readyState >= 2) {
    playHeroVideo();
  } else {
    heroVideo.addEventListener("canplay", playHeroVideo, { once: true });
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) playHeroVideo();
  });
}

function updateHeaderState() {
  header?.classList.toggle("scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

document.querySelectorAll('a[href="xxxxx"]').forEach((link) => {
  link.classList.add("btn-whatsapp");
});

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px 80px 0px" }
);

function showInitialReveals() {
  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.08) {
      element.classList.add("is-visible");
      revealObserver.unobserve(element);
    }
  });
}

revealElements.forEach((element) => revealObserver.observe(element));
requestAnimationFrame(showInitialReveals);

const icons = {
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 19 6v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-5"/></svg>',
  research: '<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/><path d="M8.5 10.5h4"/></svg>',
  database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>',
  medical: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/><rect x="4" y="4" width="16" height="16" rx="4"/></svg>',
  device: '<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 7h4M11 17h2"/></svg>',
  ai: '<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3"/><path d="M10 12h4"/></svg>',
};

document.querySelectorAll(".program-card").forEach((card, index) => {
  const icon = card.querySelector(".card-icon");
  if (icon) icon.innerHTML = icons[card.dataset.icon] || icons.medical;
  card.style.setProperty("--delay", `${Math.min(index * 55, 360)}ms`);
});

document.querySelectorAll(".why-item").forEach((item, index) => {
  item.style.setProperty("--delay", `${Math.min(index * 45, 320)}ms`);
});

const heroModel = document.querySelector(".model-lab");
if (heroModel) {
  const particleLayer = heroModel.querySelector(".model-particles");
  if (particleLayer) {
    Array.from({ length: 28 }).forEach((_, index) => {
      const particle = document.createElement("span");
      particle.className = "model-particle";
      particle.style.left = `${8 + Math.random() * 84}%`;
      particle.style.top = `${6 + Math.random() * 86}%`;
      particle.style.setProperty("--size", `${2 + Math.random() * 5}px`);
      particle.style.setProperty("--opacity", `${0.24 + Math.random() * 0.58}`);
      particle.style.setProperty("--duration", `${4.8 + Math.random() * 6.8}s`);
      particle.style.setProperty("--delay", `${index * -0.28}s`);
      particle.style.setProperty("--drift-x", `${-18 + Math.random() * 36}px`);
      particle.style.setProperty("--drift-y", `${-24 + Math.random() * 48}px`);
      particleLayer.appendChild(particle);
    });
  }

}

document.querySelectorAll(".program-card").forEach((card) => {
  const link = card.querySelector(".enquire-link");
  link?.addEventListener("click", (event) => {
    event.preventDefault();
    const course = card.dataset.course;
    const message = `Hello APIS, I am interested in ${course}. Please share course details, fees, and batch timing.`;
    window.open(`xxxxx?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
});

const form = document.querySelector("#admissionForm");
const successMessage = document.querySelector("#formSuccess");

function setError(field, message) {
  const error = field.parentElement.querySelector("small");
  field.classList.toggle("invalid", Boolean(message));
  if (error) error.textContent = message;
}

function validateForm(formElement) {
  let isValid = true;
  const fields = ["name", "mobile", "qualification", "course"].map((name) => formElement.elements[name]);

  fields.forEach((field) => {
    const value = field.value.trim();
    let message = "";
    if (!value) message = "This field is required.";
    if (field.name === "mobile" && value && !/^[0-9+\-\s()]{8,16}$/.test(value)) {
      message = "Enter a valid mobile number.";
    }
    setError(field, message);
    if (message) isValid = false;
  });

  return isValid;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.textContent = "";

  if (!validateForm(form)) return;

  const data = new FormData(form);
  const message = [
    "Hello APIS, I want to submit an admission inquiry.",
    `Name: ${data.get("name")}`,
    `Mobile: ${data.get("mobile")}`,
    `Qualification: ${data.get("qualification")}`,
    `Course Interest: ${data.get("course")}`,
  ].join("\n");

  successMessage.textContent = "Inquiry prepared successfully. WhatsApp will open with your details.";
  window.open(`xxxxx?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  form.reset();
});

form?.querySelectorAll("input, select").forEach((field) => {
  field.addEventListener("input", () => setError(field, ""));
  field.addEventListener("change", () => setError(field, ""));
});

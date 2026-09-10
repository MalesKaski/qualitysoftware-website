const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");

  menuIcon.classList.toggle("bx-x", isOpen);
  menuIcon.classList.toggle("bx-menu", !isOpen);

  menuIcon.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");

    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");

    menuIcon.setAttribute("aria-expanded", "false");
  });
});

// scroll sections
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

let navigationTarget = null;
let navigationTimeout;

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationTarget = link.getAttribute("href").replace("#", "");

    navLinks.forEach((navLink) => {
      navLink.classList.toggle(
        "active",
        navLink.getAttribute("href") === `#${navigationTarget}`,
      );
    });

    clearTimeout(navigationTimeout);

    navigationTimeout = setTimeout(() => {
      navigationTarget = null;
    }, 700);
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + header.offsetHeight + 20;

  let currentSection = sections[0]?.id || "";

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.id;
    }
  });

  if (!navigationTarget) {
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSection}`,
      );
    });
  }

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  menuIcon.classList.add("bx-menu");
  menuIcon.setAttribute("aria-expanded", "false");
  navbar.classList.remove("active");
});

// dark / light mode
const darkModeIcon = document.querySelector("#darkMode-icon");

let currentTheme = localStorage.getItem("theme") || "light";

function setTheme(theme) {
  currentTheme = theme;

  document.body.classList.toggle("dark-mode", theme === "dark");

  darkModeIcon.classList.toggle("bx-moon", theme === "light");
  darkModeIcon.classList.toggle("bx-sun", theme === "dark");

  darkModeIcon.setAttribute(
    "aria-label",
    theme === "light" ? "Switch to dark mode" : "Switch to light mode",
  );

  localStorage.setItem("theme", theme);
}

darkModeIcon.addEventListener("click", () => {
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(nextTheme);
});

setTheme(currentTheme);

// dark / light mode
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.technologies": "Technologies",
    "nav.contact": "Contact",

    "home.titleFirst": "Quality",
    "home.titleSecond": "Software",
    "home.subtitle": "Software & Quality Engineering",
    "home.description":
      "Software development, quality assurance and business automation focused on practical solutions that solve real business problems.",
    "home.services": "Our Services",
    "home.contact": "Let's Talk",

    "about.headingFirst": "About",
    "about.headingSecond": "Quality Software",
    "about.title": "Technology focused on real business value",
    "about.p1":
      "Quality Software helps businesses build reliable software, improve product quality and automate repetitive processes. The focus is on practical solutions that solve real problems and support everyday business operations.",
    "about.p2":
      "The work combines software development, quality assurance and business automation — from web applications and backend services, through API and database testing, to improving existing systems and processes.",
    "about.p3":
      "Each project is approached with an emphasis on simplicity, maintainability and long-term value, without unnecessary complexity.",

    "services.headingFirst": "Our",
    "services.headingSecond": "Services",
    "services.software.title": "Software Development",
    "services.software.p1":
      "Development and improvement of web applications, backend services and business-oriented software solutions.",
    "services.software.p2":
      "From new features and integrations to maintaining and modernizing existing systems.",
    "services.qa.title": "Quality Assurance",
    "services.qa.p1":
      "Manual and automated testing of web applications, APIs and backend systems with a strong focus on reliability and regression prevention.",
    "services.qa.p2":
      "Test automation, API testing, integration testing and quality improvements across the software development lifecycle.",
    "services.automation.title": "Business Automation",
    "services.automation.p1":
      "Automation of repetitive tasks and business processes to reduce manual work, improve consistency and save time.",
    "services.automation.p2":
      "Custom integrations, data processing and lightweight tools tailored to specific operational needs.",

    "technology.headingFirst": "Our",
    "technology.headingSecond": "Technologies",
    "technology.backend.title": "Backend & Development",
    "technology.backend.text":
      "Java, Spring Boot, REST APIs, Maven, SQL and PostgreSQL.",
    "technology.automation.title": "Test Automation",
    "technology.automation.text":
      "Playwright, Selenium, WebdriverIO, Cucumber and TestNG.",
    "technology.testing.title": "Quality & API Testing",
    "technology.testing.text":
      "Functional testing, regression testing, integration testing, API testing and database verification.",
    "technology.delivery.title": "Tools & Delivery",
    "technology.delivery.text":
      "Git, GitHub, GitLab, Jira, Docker and CI/CD workflows.",

    "contact.headingFirst": "Let's",
    "contact.headingSecond": "Work Together",
    "contact.title": "Have a project or an idea?",
    "contact.description":
      "Whether you need help with software development, quality assurance, business automation or improving an existing solution, let's talk about how Quality Software can support your project.",

    "footer.copyright": "© 2026 Quality Software. All rights reserved.",
    "footer.services":
      "Software Development • Quality Assurance • Business Automation",
  },

  pl: {
    "nav.home": "Start",
    "nav.about": "O nas",
    "nav.services": "Usługi",
    "nav.technologies": "Technologie",
    "nav.contact": "Kontakt",

    "home.titleFirst": "Quality",
    "home.titleSecond": "Software",
    "home.subtitle": "Software & Quality Engineering",
    "home.description":
      "Tworzenie oprogramowania, zapewnienie jakości oraz automatyzacja procesów biznesowych skoncentrowane na praktycznych rozwiązaniach realnych problemów.",
    "home.services": "Nasze usługi",
    "home.contact": "Porozmawiajmy",

    "about.headingFirst": "O",
    "about.headingSecond": "Quality Software",
    "about.title": "Technologia skoncentrowana na realnej wartości biznesowej",
    "about.p1":
      "Quality Software pomaga firmom tworzyć niezawodne oprogramowanie, podnosić jakość produktów oraz automatyzować powtarzalne procesy. Skupiamy się na praktycznych rozwiązaniach realnych problemów i codziennych potrzeb biznesowych.",
    "about.p2":
      "Łączymy tworzenie oprogramowania, zapewnienie jakości oraz automatyzację biznesową — od aplikacji webowych i usług backendowych, przez testowanie API i baz danych, aż po rozwój i usprawnianie istniejących systemów i procesów.",
    "about.p3":
      "Każdy projekt realizujemy z naciskiem na prostotę, łatwość utrzymania i długoterminową wartość, bez zbędnego komplikowania rozwiązań.",

    "services.headingFirst": "Nasze",
    "services.headingSecond": "Usługi",
    "services.software.title": "Tworzenie oprogramowania",
    "services.software.p1":
      "Tworzenie i rozwój aplikacji webowych, usług backendowych oraz rozwiązań programistycznych wspierających potrzeby biznesowe.",
    "services.software.p2":
      "Od nowych funkcjonalności i integracji po utrzymanie i modernizację istniejących systemów.",
    "services.qa.title": "Quality Assurance",
    "services.qa.p1":
      "Manualne i automatyczne testowanie aplikacji webowych, API oraz systemów backendowych ze szczególnym naciskiem na niezawodność i zapobieganie regresji.",
    "services.qa.p2":
      "Automatyzacja testów, testy API, testy integracyjne oraz usprawnianie jakości w całym cyklu wytwarzania oprogramowania.",
    "services.automation.title": "Automatyzacja biznesowa",
    "services.automation.p1":
      "Automatyzacja powtarzalnych zadań i procesów biznesowych w celu ograniczenia pracy ręcznej, poprawy spójności i oszczędności czasu.",
    "services.automation.p2":
      "Dedykowane integracje, przetwarzanie danych i lekkie narzędzia dopasowane do konkretnych potrzeb operacyjnych.",

    "technology.headingFirst": "Nasze",
    "technology.headingSecond": "Technologie",
    "technology.backend.title": "Backend & Development",
    "technology.backend.text":
      "Java, Spring Boot, REST API, Maven, SQL oraz PostgreSQL.",
    "technology.automation.title": "Automatyzacja testów",
    "technology.automation.text":
      "Playwright, Selenium, WebdriverIO, Cucumber oraz TestNG.",
    "technology.testing.title": "Testowanie jakości i API",
    "technology.testing.text":
      "Testy funkcjonalne, regresyjne, integracyjne, testowanie API oraz weryfikacja baz danych.",
    "technology.delivery.title": "Narzędzia i delivery",
    "technology.delivery.text":
      "Git, GitHub, GitLab, Jira, Docker oraz procesy CI/CD.",

    "contact.headingFirst": "Pracujmy",
    "contact.headingSecond": "Razem",
    "contact.title": "Masz projekt lub pomysł?",
    "contact.description":
      "Jeśli potrzebujesz wsparcia w tworzeniu oprogramowania, zapewnieniu jakości, automatyzacji biznesowej lub rozwoju istniejącego rozwiązania, porozmawiajmy o tym, jak Quality Software może wesprzeć Twój projekt.",

    "footer.copyright": "© 2026 Quality Software. Wszelkie prawa zastrzeżone.",
    "footer.services":
      "Software Development • Quality Assurance • Business Automation",
  },
};

const languageIcon = document.querySelector("#language-icon");

let currentLanguage = localStorage.getItem("language") || "en";

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[language]?.[key];

    if (translation) {
      element.textContent = translation;
    }
  });

  languageIcon.textContent = language.toUpperCase();

  localStorage.setItem("language", language);
}

languageIcon.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "pl" : "en";
  setLanguage(nextLanguage);
});

setLanguage(currentLanguage);

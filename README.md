## Application Form response sheet : "https://docs.google.com/spreadsheets/d/1lwij0iknjNgsSK6Y5C9twupcGNlkMqgIMgfjI4x9o_I/edit?gid=0#gid=0"



# Kevin Missal's Café – Franchise Web Landing Page

## 📖 Overview
This repository contains a **static, premium‑grade landing page** for the Kevin Missal’s Café franchise. The site showcases the brand, franchise opportunity, support structure, and a **Google‑Sheets‑backed application form**. It is built with **pure HTML, modern CSS, and vanilla JavaScript** – no external frameworks or libraries – to keep the bundle lightweight while delivering a **glass‑morphic, responsive, and highly interactive** experience.

---

## 🎯 Goal of the Project
- **Present the franchise proposition** in a visually striking, interview‑ready format.
- **Demonstrate UI craftsmanship** (dynamic navigation, dropdowns, accordion FAQ, testimonial slider, and form handling).
- **Showcase best‑practice front‑end architecture** – semantic HTML5, CSS custom properties, and modular JavaScript.
- **Provide a ready‑to‑deploy static site** that can be hosted on any static‑hosting platform (Vercel, Netlify, GitHub Pages, etc.).

---

## 🛠️ Tech Stack
| Layer | Technology | Reasoning |
|-------|------------|-----------|
| **Markup** | HTML5 | Semantic tags (`<header>`, `<section>`, `<article>`) improve accessibility and SEO. |
| **Styling** | Vanilla CSS (custom properties, CSS Grid/Flexbox) | Enables fine‑grained design control, dark‑mode ready, and eliminates runtime CSS‑in‑JS overhead. |
| **Interactivity** | Plain JavaScript (ES2022) | Keeps the bundle ~4 KB gzipped, ensures zero‑dependency deployment. |
| **Form Backend** | Google Apps Script endpoint | Provides a server‑less, CORS‑friendly way to persist form data into a Google Sheet. |

---

## 📂 Project Structure
```
KelvinCafe/
│
├─ index.html          # Main landing page (hero, stats, opportunity, etc.)
├─ style.css           # Design system, component styles, responsive layout
├─ app.js              # UI logic: dropdown, FAQ accordion, form submission
└─ README.md           # This documentation (generated for interview)
```

### `index.html`
- **Semantic sections** (`<header>`, `<section class="banner-main">`, `<section class="stats-section">`, …) give a clear content hierarchy for crawlers and screen readers.
- **Navigation** uses a sticky header (`.krypton`) with a **blurred backdrop** (`backdrop-filter: blur(6px)`) – a modern glass‑morphism effect.
- **Responsive grid** (`.banner-main__grid`, `.stats-grid-layout`, `.opportunity-section__grid`) built with **CSS Grid** to automatically re‑flow on tablets and phones.
- **Call‑to‑action buttons** (`.pulse`, `.pulse--large`) are styled with subtle hover states and focus outlines for accessibility.
- **Image assets** live under `ass2/` – each image is served with `object-fit: cover` to preserve aspect ratios.

### `style.css`
- **Design Tokens** – CSS custom properties (`--bg`, `--card`, `--green`, `--radius`, …) act as a **single source of truth** for colors, spacing, and radii.
- **Glass‑morphism**: the header uses `background: rgba(250,250,250,0.8)` + `backdrop-filter: blur(6px)`.
- **Component‑first approach** – each UI block (`.prism`, `.faq-item`, `.support-card`, `.opp-card`) has its own scoped styles, making the stylesheet maintainable.
- **Responsive breakpoints** (`@media (max-width: 980px)`, `@media (max-width: 520px)`) ensure graceful degradation on small screens.
- **Micro‑animations** – subtle transitions on dropdowns (`.prism.open .prism-list`) and hover effects (`.vortex a:hover`).

### `app.js`
- **Dropdown (Prism) logic** – toggles the franchise‑menu with ARIA attributes (`aria-expanded`) for screen‑reader compatibility.
- **FAQ accordion** – only one item expands at a time; height animation is driven by `max-height` for smooth open/close.
- **Form handling** – collects data from the application form, posts JSON to a Google Apps Script URL using `fetch` with `mode: 'no-cors'`. A success toast appears for 5 seconds.
- **Event delegation** – global click listeners close any open dropdown when clicking outside, preventing stray open menus.

---

## 🚀 How to Run Locally
1. **Clone the repository** (or copy the folder) to your machine.
2. Open `index.html` in a browser – no build step required.
3. To test the form, replace `GOOGLE_SCRIPT_URL` in `app.js` with your own Google Apps Script endpoint (see the **Google Form Integration** section below).

---

## 📧 Google Form Integration (Deep Dive)
The form posts JSON directly to a Google Apps Script web‑app URL. The script should:
1. **Parse the incoming JSON** (`e.postData.contents`).
2. **Append a new row** to a designated Google Sheet.
3. **Return a 200 response** (the front‑end treats the request as fire‑and‑forget due to `no‑cors`).

> **Tip:** Enable **CORS** on the script by adding `ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON).setHeader('Access-Control-Allow-Origin', '*');` if you ever switch to a stricter fetch mode.

---

## 🎨 Design Inspiration & Research
- **Glass‑morphism** – popularized by Apple’s macOS Big Sur and widely adopted in modern SaaS dashboards (e.g., Notion, Figma). The blurred header gives depth while keeping the UI lightweight.
- **Typography** – uses **Inter** (system‑UI fallback) for high readability on both desktop and mobile, mirroring the typographic choices of leading tech‑product landing pages.
- **Color Palette** – a dark‑mode‑friendly palette (`--bg`, `--card`, `--ink`) combined with accent greens (`--green`) and blues (`--blue`) for trust and call‑to‑action emphasis.
- **Micro‑interactions** – subtle hover, focus, and transition effects are inspired by the **Framer Motion** philosophy of “small, delightful motions” without heavy JS libraries.

---

## 📈 SEO & Accessibility Checklist (Interview‑Ready)
- **Title & Meta** – Add `<title>` and `<meta name="description" content="...">` in the `<head>`.
- **Heading hierarchy** – Single `<h1>` (`#banner-title`) followed by logical `<h2>`‑`<h3>` ordering.
- **ARIA attributes** – `aria-expanded` on dropdown, `role="menu"`/`role="menuitem"` for navigation lists, and proper `alt` text on images.
- **Keyboard navigation** – All interactive elements (`<button>`, `<a>`) are focusable and have visible focus outlines (`outline: 3px solid #c7d2fe`).
- **Responsive images** – Use `srcset` or `picture` for high‑DPI devices (future improvement).

---

## 🧩 Potential Enhancements (Future‑Proofing)
| Area | Idea |
|------|------|
| **Dark Mode** | Toggle CSS variables (`--bg`, `--card`, `--ink`) via a `data-theme="dark"` attribute on `<html>`. |
| **Performance** | Lazy‑load hero images with `loading="lazy"` and serve WebP assets. |
| **Form Validation** | Add client‑side validation (HTML5 `required`, pattern checks) before `fetch`. |
| **Analytics** | Insert a lightweight analytics snippet (e.g., Plausible) to track conversions. |
| **Componentization** | Migrate to a tiny component system (e.g., HTM + Vite) while keeping the zero‑dependency ethos. |

---

## 📚 Final Thoughts
This project is a **showcase of pure front‑end craftsmanship** – it balances aesthetic polish, accessibility, and functional interactivity without the overhead of a framework. It demonstrates to interviewers that you can:
- **Architect a maintainable CSS design system** using custom properties.
- **Write modular, vanilla JavaScript** for UI patterns (dropdowns, accordions, form handling).
- **Integrate server‑less back‑ends** (Google Apps Script) for quick data capture.
- **Apply modern UI trends** (glass‑morphism, micro‑animations) responsibly.

Feel free to clone, extend, and use this as a template for future franchise or product landing pages.

---

*Generated by Antigravity – your AI‑powered coding companion.*

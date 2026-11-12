// ============================================================
// EDIT YOUR WORK HERE
// blogs: { source, title, desc, url }
// ads:   { source, title, desc, img }   (img = file inside the ads/ folder; clicking opens it full size)
// To add more, copy one block, paste it below, and change the text.
// ============================================================
const blogs = [
  {
    source: "Silstone Group",
    title: "How You Should Invest in AI as a Software Company",
    desc: "A practical framework for putting AI budget behind measurable gains like faster engineering and better testing, instead of hype or disconnected tools.",
    url: "https://www.silstonegroup.com/how-you-should-invest-in-ai-as-a-software-company"
  },
  {
    source: "Silstone Group",
    title: "How to Build an AI Agent for Healthcare",
    desc: "A step-by-step guide to healthcare AI agents that hold up in clinical settings: one workflow first, layered design, privacy compliance, pilot, then monitoring.",
    url: "https://www.silstonegroup.com/how-to-build-an-ai-agent-for-healthcare"
  },
  {
    source: "Outplay.ai",
    title: "How Marketing Automation Powers Smarter Sales Outreach",
    desc: "How pairing marketing automation with sales engagement tools gives prospects timelier, more relevant outreach, and how to measure it.",
    url: "https://outplay.ai/blog/Marketing-Automation-Powers-Sales-Outreach"
  },
  {
    source: "Outplay.ai",
    title: "Sales Automation and Customer Support: Better Together",
    desc: "Why sales and support should share one view of the customer journey, and how the Outplay and Hippo integration connects them.",
    url: "https://outplay.ai/blog/Sales-automation-and-support"
  }
];

const pages = [
  {
    source: "Outplay.ai · Web page",
    title: "Outplay Features",
    desc: "Feature overview for a sales engagement platform: prospecting, email, multi-channel sequences, engagement tracking and team reporting.",
    url: "https://outplay.ai/features"
  },
  {
    source: "Outplay.ai · Web page",
    title: "Multi-Channel Sales Engagement",
    desc: "Product page on reaching prospects across email, phone, SMS, LinkedIn, WhatsApp and chat from one place with automated sequences.",
    url: "https://outplay.ai/features/multi-channel-sales-engagement"
  },
  {
    source: "Silstone Group · Web page",
    title: "Silstone Group homepage",
    desc: "Homepage for a Canadian software firm offering AI-assisted engineering, AI audits and fractional CTO services, with low-commitment entry points.",
    url: "https://www.silstonegroup.com/"
  },
  {
    source: "Silstone.AI · Web page",
    title: "AI Agents for Healthcare",
    desc: "Site for custom AI agents handling clinic back-office work such as denials, prior authorization and fax handling, with HIPAA-compliant data handling.",
    url: "https://www.silstone.ai/"
  }
];

const ads = [
  {
    source: "Outplay.ai · Meta",
    title: "Booked 0 meetings this week?",
    desc: "Problem-first creative: the issue is the sales workflow, not the team.",
    img: "ads/ad-1.png"
  },
  {
    source: "Outplay.ai · Meta",
    title: "Let AI close your deals",
    desc: "Product-led creative showing a multichannel sequence: email, LinkedIn, call and manual email.",
    img: "ads/ad-2.png"
  },
  {
    source: "Outplay.ai · Meta",
    title: "Your sales pipeline, fully under control",
    desc: "Benefit-led creative focused on never missing an opportunity.",
    img: "ads/ad-3.png"
  }
];

// ---------- Render ----------
(function renderWork() {
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const blogGrid = document.getElementById("blogGrid");
  if (blogGrid) {
    blogGrid.innerHTML = blogs.map(b => `
      <a class="card reveal" href="${esc(b.url)}" target="_blank" rel="noopener">
        <span class="tag">${esc(b.source)}</span>
        <h3>${esc(b.title)}</h3>
        <p>${esc(b.desc)}</p>
        <span class="go">Read article ↗</span>
      </a>`).join("");
  }

  const pageGrid = document.getElementById("pageGrid");
  if (pageGrid) {
    pageGrid.innerHTML = pages.map(p => `
      <a class="card reveal" href="${esc(p.url)}" target="_blank" rel="noopener">
        <span class="tag">${esc(p.source)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        <span class="go">Visit page ↗</span>
      </a>`).join("");
  }

  const adGrid = document.getElementById("adGrid");
  if (adGrid) {
    adGrid.innerHTML = ads.map(a => `
      <a class="card ad reveal" href="${esc(a.img)}" target="_blank" rel="noopener">
        <img src="${esc(a.img)}" alt="${esc(a.title)}" loading="lazy">
        <span class="tag">${esc(a.source)}</span>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.desc)}</p>
        <span class="go">View full size ↗</span>
      </a>`).join("");
  }
})();

// ---------- Theme toggle ----------
(function theme() {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();

// ---------- Footer year ----------
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// ---------- Scroll reveal ----------
(function reveal() {
  const targets = document.querySelectorAll(".section-head, .metric, .job, .skill-card, .edu > div, .contact > *, .reveal");
  targets.forEach(el => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) { targets.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  targets.forEach(el => io.observe(el));
})();

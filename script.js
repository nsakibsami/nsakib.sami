const $ = (s) => document.querySelector(s);
/* THEME */
const root = document.documentElement,
  tog = $("#tog");
const aboutPortrait = document.querySelector(".vid img");
if (aboutPortrait) {
  aboutPortrait.src =
    "https://dhakasongjog.com/wp-content/uploads/2026/11/sami.png";
}
function isDark() {
  const t = root.dataset.theme;
  return t ? t === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
}
function paint() {
  tog.textContent = isDark() ? "☀" : "☾";
}
try {
  const s = localStorage.getItem("theme");
  if (s === "light" || s === "dark") root.dataset.theme = s;
} catch (e) {}
paint();
tog.onclick = () => {
  const n = isDark() ? "light" : "dark";
  root.dataset.theme = n;
  try {
    localStorage.setItem("theme", n);
  } catch (e) {}
  paint();
};
/* MOBILE MENU */
$("#burger").onclick = () => $("#links").classList.toggle("open");
document
  .querySelectorAll("#links a")
  .forEach((a) => (a.onclick = () => $("#links").classList.remove("open")));
/* MARQUEE */
const words = [
  "Logo Design",
  "Branding",
  "Social Media Design",
  "Poster Design",
  "Packaging",
  "Print Design",
];
$("#track").innerHTML = [...words, ...words]
  .map((w) => `<span>${w}</span><em>✦</em>`)
  .join("")
  .repeat(2);
/* SERVICES */
const services = [
  [
    "Logo & Brand Identity",
    ["Logo Design", "Brand Guidelines", "Visual Identity"],
    "Strategic logo systems and visual identities designed to stay clear, consistent, and memorable.",
  ],
  [
    "Social Media Design",
    ["Post Design", "Story Templates", "Ad Creatives"],
    "Engaging social posts, stories, campaigns, and ad creatives tailored to your brand audience.",
  ],
  [
    "Poster & Banner Design",
    ["Posters", "Banners", "Flyers"],
    "Attention-focused posters, banners, flyers, and promotional artwork for print and digital campaigns.",
  ],
  [
    "Packaging Design",
    ["Labels", "Boxes", "Mockups"],
    "Clean, shelf-ready packaging concepts with carefully considered labels, structure, and brand details.",
  ],
  [
    "Print & Stationery",
    ["Business Cards", "Brochures", "Letterheads"],
    "Professional business cards, brochures, letterheads, and stationery built around one cohesive identity.",
  ],
  [
    "Photo Editing & Retouching",
    ["Retouching", "Color Correction", "Compositing"],
    "Precise retouching, color correction, and compositing for polished commercial and social visuals.",
  ],
];
$("#acc").innerHTML = services
  .map(
    (
      s,
      i,
    ) => `<div class="item${i == 1 ? " open" : ""}" tabindex="0" role="button" aria-expanded="${i == 1}">
 <div class="row"><span class="n">0${i + 1}.</span><h3>${s[0]}</h3><span class="arr">↗</span></div>
 <div class="body"><div class="tags">${s[1].map((t) => `<span>${t}</span>`).join("")}</div><p style="margin:0">${s[2]}</p></div></div>`,
  )
  .join("");
document.querySelectorAll(".item").forEach((it) => {
  const go = () => {
    const o = it.classList.contains("open");
    document.querySelectorAll(".item").forEach((x) => {
      x.classList.remove("open");
      x.setAttribute("aria-expanded", "false");
    });
    if (!o) {
      it.classList.add("open");
      it.setAttribute("aria-expanded", "true");
    }
  };
  it.onclick = go;
  it.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go();
    }
  };
});
/* PROJECTS */
const projects = [
  {
    t: "Dhaka Songjog — Project Thumbnail",
    c: "Branding",
    d: "Dhaka Songjog project thumbnail.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/5-2-scaled.png",
  },
  {
    t: "Dhaka Songjog — Logo",
    c: "Logo",
    d: "Dhaka Songjog logo design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/ds-logo.jpg",
  },
  {
    t: "Dhaka Songjog — Facebook Cover",
    c: "Social",
    d: "Dhaka Songjog Facebook cover design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/cover-scaled.jpg",
  },
  {
    t: "Dhaka Songjog — News Photocard With Link",
    c: "Social",
    d: "Dhaka Songjog news photocard with link.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/with-link.jpg",
  },
  {
    t: "Dhaka Songjog — News Photocard Without Link",
    c: "Social",
    d: "Dhaka Songjog news photocard without link.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/without-link.jpg",
  },
  {
    t: "Al-Qariyah International Academy — Project Thumbnail",
    c: "Branding",
    d: "Al-Qariyah International Academy project thumbnail.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/5-scaled.png",
  },
  {
    t: "Al-Qariyah International Academy — Logo",
    c: "Logo",
    d: "Al-Qariyah International Academy logo design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/logo-03-scaled.png",
  },
  {
    t: "Al-Qariyah International Academy — Facebook Cover",
    c: "Social",
    d: "Al-Qariyah International Academy Facebook cover design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/cover-04-scaled.png",
  },
  {
    t: "Logo Design",
    c: "Logo",
    d: "Logo design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/logo1-5.png",
  },
  {
    t: "Event for Little Scientist — Logo",
    c: "Logo",
    d: "Event for Little Scientist logo design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/logo2-1.png",
  },
  {
    t: "Event for Little Scientist — Poster",
    c: "Poster",
    d: "Event for Little Scientist poster design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/pro.png",
  },
  {
    t: "Agrajatra Pratidin — 1st Anniversary Frame",
    c: "Social",
    d: "Agrajatra Pratidin first anniversary celebration frame.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/frame1.png",
  },
  {
    t: "Agrajatra Pratidin — Profile Frame",
    c: "Social",
    d: "Agrajatra Pratidin anniversary profile frame.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/profileframe-scaled.png",
  },
  {
    t: "Social Media Design 01",
    c: "Social",
    d: "Social media design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/sm1.png",
  },
  {
    t: "Social Media Design 02",
    c: "Social",
    d: "Social media design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/sm.png",
  },
  {
    t: "Social Media Design 03",
    c: "Social",
    d: "Social media design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/sm2.png",
  },
  {
    t: "Social Media Design 04",
    c: "Social",
    d: "Social media design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/pro1.png",
  },
  {
    t: "T-shirt Design",
    c: "T-shirt",
    d: "T-shirt design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/logo3.jpg",
  },
  {
    t: "YouTube Thumbnail Design 01",
    c: "YouTube",
    d: "YouTube thumbnail design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/yt2.png",
  },
  {
    t: "YouTube Thumbnail Design 02",
    c: "YouTube",
    d: "YouTube thumbnail design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/yt1.png",
  },
  {
    t: "YouTube Thumbnail Design 03",
    c: "YouTube",
    d: "YouTube thumbnail design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/yt.png",
  },
  {
    t: "YouTube Thumbnail Design 04",
    c: "YouTube",
    d: "YouTube thumbnail design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/yt3.png",
  },
  {
    t: "YouTube Thumbnail Design 05",
    c: "YouTube",
    d: "YouTube thumbnail design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/yt5.png",
  },
  {
    t: "Sports Poster Design 01",
    c: "Sports",
    d: "Sports poster design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/spo0-1.png",
  },
  {
    t: "Sports Poster Design 02",
    c: "Sports",
    d: "Sports poster design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/spo.png",
  },
  {
    t: "Sports Poster Design 03",
    c: "Sports",
    d: "Sports poster design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/spo1.png",
  },
  {
    t: "Sports Poster Design 04",
    c: "Sports",
    d: "Sports poster design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/spo2.png",
  },
  {
    t: "Sports Poster Design 05",
    c: "Sports",
    d: "Sports poster design.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/spo3.png",
  },
  {
    t: "Print Design 01",
    c: "Print",
    d: "Print design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/pro2.png",
  },
  {
    t: "Print Design 02",
    c: "Print",
    d: "Print design portfolio artwork.",
    img: "https://dhakasongjog.com/wp-content/uploads/2026/10/pro4.png",
  },
];
const cats = [
  "All",
  "Logo",
  "Branding",
  "Social",
  "Print",
  "Poster",
  "T-shirt",
  "YouTube",
  "Sports",
];
$("#filters").innerHTML = cats
  .map((c, i) => `<button class="${i ? "" : "on"}" data-f="${c}">${c}</button>`)
  .join("");
let pf = "All",
  pa = 0,
  pl = [],
  pt,
  pHover = false,
  pm = 0,
  lastF = null;
const pst = $("#pstage"),
  pmod = $("#pmod");
const pimg = (p) =>
  p.img ? `<img src="${p.img}" alt="${p.t}">` : "[Add project image]";
function pbuild() {
  pl = projects.filter((p) => pf === "All" || p.c === pf);
  pa = 0;
  pst.innerHTML = pl
    .map(
      (p, i) =>
        `<article class="pslide${i % 2 ? " alt" : ""}" data-i="${i}"><div class="img">${pimg(p)}</div><div class="in"><div><span class="tg">${p.c}</span><h3>${p.t}</h3><p>${p.d}</p></div><button class="pbtn" data-pv="${i}">Preview ↗</button></div></article>`,
    )
    .join("");
  $("#pdots").innerHTML = pl
    .map(
      (_, i) => `<button aria-label="Project ${i + 1}" data-i="${i}"></button>`,
    )
    .join("");
  pplace();
}
function pplace() {
  const n = pl.length;
  pst.querySelectorAll(".pslide").forEach((el, i) => {
    let d = i - pa;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    const a = Math.abs(d),
      on = a <= 1;
    el.classList.toggle("act", d === 0);
    el.style.zIndex = 3 - a;
    el.style.opacity = on ? 1 : 0;
    el.style.pointerEvents = on ? "auto" : "none";
    el.style.transform = `translateX(-50%) translateX(${d * 82}%) scale(${d === 0 ? 1 : on ? 0.8 : 0.6})`;
    el.setAttribute("aria-hidden", on ? "false" : "true");
    el.querySelector(".pbtn").tabIndex = d === 0 ? 0 : -1;
  });
  $("#pdots")
    .querySelectorAll("button")
    .forEach((b, j) => b.classList.toggle("on", j === pa));
  $("#pprev").style.display = $("#pnext").style.display = n > 1 ? "" : "none";
}
function pgo(k) {
  if (pl.length < 2) return;
  pa = (pa + k + pl.length) % pl.length;
  pplace();
}
function pauto() {
  clearInterval(pt);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  pt = setInterval(() => {
    if (!pHover && !pmod.classList.contains("open")) pgo(1);
  }, 3500);
}
$("#pprev").onclick = () => {
  pgo(-1);
  pauto();
};
$("#pnext").onclick = () => {
  pgo(1);
  pauto();
};
$("#pdots").onclick = (e) => {
  const b = e.target.closest("button");
  if (b) {
    pa = +b.dataset.i;
    pplace();
    pauto();
  }
};
pst.onclick = (e) => {
  const b = e.target.closest("[data-pv]");
  if (b) {
    popen(+b.dataset.pv);
    return;
  }
  const sl = e.target.closest(".pslide");
  if (sl && !sl.classList.contains("act")) {
    pa = +sl.dataset.i;
    pplace();
    pauto();
  }
};
const pc = $("#pcar");
pc.onmouseenter = () => (pHover = true);
pc.onmouseleave = () => (pHover = false);
pc.onfocusin = () => (pHover = true);
pc.onfocusout = () => (pHover = false);
pc.onkeydown = (e) => {
  if (e.key === "ArrowLeft") {
    pgo(-1);
    pauto();
  }
  if (e.key === "ArrowRight") {
    pgo(1);
    pauto();
  }
};
let sx = null;
pc.addEventListener("pointerdown", (e) => {
  sx = e.clientX;
});
pc.addEventListener("pointerup", (e) => {
  if (sx !== null && Math.abs(e.clientX - sx) > 50) {
    pgo(e.clientX < sx ? 1 : -1);
    pauto();
  }
  sx = null;
});
pc.addEventListener("pointercancel", () => {
  sx = null;
});
$("#filters").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  document
    .querySelectorAll("#filters button")
    .forEach((x) => x.classList.toggle("on", x === b));
  pf = b.dataset.f;
  pbuild();
  pauto();
};
/* preview modal */
function pfill() {
  const p = pl[pm];
  $("#pm-img").innerHTML = pimg(p);
  $("#pm-tag").textContent = p.c;
  $("#pm-title").textContent = p.t;
  $("#pm-desc").textContent = p.d;
  $("#pm-prev").style.display = $("#pm-next").style.display =
    pl.length > 1 ? "" : "none";
}
function popen(i) {
  pm = i;
  lastF = document.activeElement;
  pfill();
  pmod.classList.add("open");
  document.body.style.overflow = "hidden";
  $("#pclose").focus();
}
function pshut() {
  pmod.classList.remove("open");
  document.body.style.overflow = "";
  if (lastF) lastF.focus();
}
function pstep(k) {
  pm = (pm + k + pl.length) % pl.length;
  pa = pm;
  pplace();
  pfill();
}
$("#pclose").onclick = pshut;
$("#pm-prev").onclick = () => pstep(-1);
$("#pm-next").onclick = () => pstep(1);
pmod.onclick = (e) => {
  if (e.target === pmod) pshut();
};
document.addEventListener("keydown", (e) => {
  if (!pmod.classList.contains("open")) return;
  if (e.key === "Escape") pshut();
  if (e.key === "ArrowLeft") pstep(-1);
  if (e.key === "ArrowRight") pstep(1);
});
pbuild();
pauto();
/* SKILLS */
const sk = [
  ["Logo & Branding", 90],
  ["Social Media Design", 85],
  ["Print Design", 80],
  ["Photo Editing", 75],
];
$("#skills").innerHTML = sk
  .map(
    (s) =>
      `<div class="sk"><div><span>${s[0]}</span><span>${s[1]}%</span></div><i><b data-w="${s[1]}"></b></i></div>`,
  )
  .join("");
/* TESTIMONIALS (illustrative drafts, not verified client feedback) */
const T = [
  {
    name: "তানভীর আহমেদ",
    category: "Graphic Design Client",
    quote:
      "ডিজাইনগুলো অনেক সুন্দর হয়েছে। আমার চাহিদা অনুযায়ী খুবই প্রফেশনাল কাজ পেয়েছি। ব্যবহার এবং যোগাযোগও বেশ ভালো ছিল।",
    image:
      "https://images.openai.com/static-rsc-4/7EmBs_c7j5uDgZq2xDxNeWcGxpABh6QqR6lbo8vRcTze76EqiBwD7_4wRL5Rw69BLW2LCJMo0U_aQERhZnF5taPy0JfxWt8XK6FG_o1d2Rccjoe1ispBuPKhRTRYLyUeWLtA9CL_0I-jnmuYI0fRAv6nddUQkpaqMetjQmQqMfY?purpose=inline",
  },
  {
    name: "মো. রাকিব হাসান",
    category: "Brand Identity Client",
    quote:
      "খুবই ক্রিয়েটিভ কাজ করেন। আমার ব্র্যান্ডের জন্য লোগো এবং সোশ্যাল মিডিয়া ডিজাইন করিয়েছিলাম। কাজের মান সত্যিই ভালো।",
    image:
      "https://images.openai.com/static-rsc-4/eNvaXUd_gFW5Sic9I2Vb62THyxXLVuPmf83sH8wUoD49RWt20ZMqU4D2hLk6rOXyIhb1cXnM4RRNPgr_d56-rl_w1udrt87FO_KW1cXGshIEOly7GW76ZtrCtpChNFbptYJdYbjfJtIQvPILMP9U7a5gAOzIC_a-LSnbpD0zvJU?purpose=inline",
  },
  {
    name: "সাদমান ইসলাম",
    category: "YouTube Thumbnail Client",
    quote:
      "ইউটিউব থাম্বনেইল অনেক সুন্দর হয়েছে। কালার কম্বিনেশন এবং ডিজাইন সেন্স অসাধারণ। সময়মতো কাজ ডেলিভারি দিয়েছেন।",
    image:
      "https://images.openai.com/static-rsc-4/GkCPHAwBpoOZmuNiClhTIkbxZcIs8bwI-u3j9mCgUB4RMoT_dgc_cTnvyd3bvPPumvS8ifDqPVrctlVtqgYfI3NzbMy6pXy2SBAbMBCi598m-6CITZaC1D8M9f-8-mmeIRLSoy_t4Pa4BKT5ueQ_IJIvVDUQa2n4WyRXDiH5ysM?purpose=inline",
  },
  {
    name: "ইমরান হোসাইন",
    category: "Social Media Design Client",
    quote:
      "কমিউনিকেশন ভালো, কাজের প্রতি আন্তরিকতা আছে। প্রয়োজন অনুযায়ী ডিজাইন সংশোধন করে দিয়েছেন। ভালো অভিজ্ঞতা হয়েছে।",
    image:
      "https://images.openai.com/static-rsc-4/ve73hASN5p7GrJku4QMJAQQ1Vo1wbxUSjqFEh7MBYw68_IVHlQ6j20-UYocs3vnCPxBgre0Wk5XorJdbR-Bb7baEpCpSwvu3at5Al9SI5_hlY8VrwalZ8sV1vRAepFs7zIq6_nmaEr3Uo3u5skxJ7ibFrQgzGxfzDmehyI7gMh8?purpose=inline",
  },
  {
    name: "মাহমুদুল হাসান",
    category: "Sports Graphics Client",
    quote:
      "স্পোর্টস পোস্টার ডিজাইনটি প্রত্যাশার চেয়েও ভালো হয়েছে। ডিজাইনে প্রফেশনাল লুক এবং দারুণ ডিটেইলস ছিল।",
    image:
      "https://images.openai.com/static-rsc-4/bEJLrUM_X6Q6ar-hrNWtMIduxdFjsQqJGhnkavjqngyDwx9Gw8QOYGu4qPlBnpPLzMfB2KFVAHFiB0Rveh4mRu6KM7me0TB7k4VTU7lT_KDy5ubvHAK6Jv4qSTlk0jpfm5Gr8UpgFk9cNUH97Ijlt8juX0tyDX1j95kBiQquWwg?purpose=inline",
  },
];
let ti = 0;
const dots = $("#dots");
$("#review-grid").innerHTML = T.map(
  (review, i) => `
    <article class="review-card" data-review="${i}">
      <div class="review-avatar" aria-hidden="true">${review.name.trim().charAt(0)}</div>
      <p lang="bn">${review.quote}</p>
      <h3 lang="bn">${review.name}</h3>
      <span>${review.category}</span>
    </article>`,
).join("");
dots.innerHTML = T.map(
  (_, i) => `<button aria-label="Testimonial ${i + 1}" data-i="${i}"></button>`,
).join("");
function showT(i) {
  ti = i;
  dots
    .querySelectorAll("button")
    .forEach((b, j) => b.classList.toggle("on", j == i));
  $("#review-grid")
    .querySelectorAll(".review-card")
    .forEach((card, j) => card.classList.toggle("active", j === i));
}
dots.onclick = (e) => {
  const b = e.target.closest("button");
  if (b) showT(+b.dataset.i);
};
showT(0);
if (!matchMedia("(prefers-reduced-motion:reduce)").matches)
  setInterval(() => showT((ti + 1) % T.length), 6000);
/* BLOGS */
$("#blogg").innerHTML = [
  "Logo Design Tips for Small Brands",
  "Choosing Colors That Convert",
  "Typography Basics for Social Posts",
]
  .map(
    (t) =>
      `<article class="card"><div class="img">Design Insights</div><div class="in"><div><h3>${t}</h3><p>Design guide</p></div><span class="arr">↗</span></div></article>`,
  )
  .join("");

const blogDots = $(".blog-dots");
blogDots.innerHTML = ["0", "1", "2"]
  .map((_, i) => `<button aria-label="Blog ${i + 1}" data-blog="${i}"></button>`)
  .join("");
let blogIndex = 0;
const blogCards = [...$("#blogg").querySelectorAll(".card")];
function showBlog(i) {
  blogIndex = i;
  blogCards.forEach((card, j) => {
    card.classList.toggle("active", j === i);
    card.setAttribute("aria-hidden", j === i ? "false" : "true");
  });
  blogDots.querySelectorAll("button").forEach((dot, j) => {
    dot.classList.toggle("on", j === i);
  });
}
blogDots.onclick = (e) => {
  const dot = e.target.closest("button");
  if (dot) showBlog(+dot.dataset.blog);
};
showBlog(0);
if (!matchMedia("(prefers-reduced-motion:reduce)").matches)
  setInterval(() => showBlog((blogIndex + 1) % blogCards.length), 6500);
/* CONTACT (mailto fallback — set your email below) */
const MY_EMAIL = "nsakib.sami@gmail.com";
$("#form").onsubmit = (e) => {
  e.preventDefault();
  const n = $("#fn").value.trim(),
    email = $("#fe"),
    m = email.value.trim(),
    b = $("#fm").value.trim(),
    out = $("#msg");
  email.value = m;
  if (!n || !email.validity.valid || !b) {
    out.textContent = "Please fill in your name, a valid email, and a message.";
    return;
  }
  location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent($("#ft").value + " — " + n)}&body=${encodeURIComponent(b + "\n\nFrom: " + n + " (" + m + ")")}`;
  out.textContent = "Opening your email app…";
};
/* REVEAL + SKILL BARS + ACTIVE LINK */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        x.target
          .querySelectorAll("[data-w]")
          .forEach((b) => (b.style.width = b.dataset.w + "%"));
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));
const secs = [...document.querySelectorAll("main>section[id],main[id]")];
addEventListener(
  "scroll",
  () => {
    let cur = "home";
    secs.forEach((s) => {
      if (s.getBoundingClientRect().top < 160) cur = s.id;
    });
    document
      .querySelectorAll("#links a")
      .forEach((a) =>
        a.classList.toggle("on", a.getAttribute("href") === "#" + cur),
      );
  },
  { passive: true },
);
$("#yr").textContent = new Date().getFullYear();
/* touch screens: tap a photo to toggle color */
document.querySelectorAll(".portrait,.vid").forEach((el) =>
  el.addEventListener("click", () => {
    if (matchMedia("(hover:none), (any-pointer:coarse)").matches)
      el.classList.toggle("color");
  }),
);

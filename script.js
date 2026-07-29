
const D = window.PRISM;

function header(){
  return `<header class="header">
    <div class="header-inner">
      <div class="identity">
        <a class="uni-lockup" href="index.html" aria-label="Pusan National University">
          <img class="uni-seal-img" src="assets/pnu-seal-hires.jpg" alt="Pusan National University emblem">
          <img class="uni-wordmark-img" src="assets/pnu-wordmark-hires.jpg" alt="Pusan National University">
        </a>
        <a class="lab-lockup" href="index.html" aria-label="PRISM Lab">
          <img class="prism-lockup-img" src="assets/prism-logo-header-v2.png" alt="PRISM Lab logo">
        </a>
      </div>
      <div></div>
      <div style="display:flex;align-items:center">
        <nav class="nav">
          <a href="about.html">About</a>
          <a href="people.html">Professor</a>
          <a href="research.html">Projects</a>
          <a href="publications.html">Publications</a>
          <a href="join.html">Join Us</a>
          <a href="contact.html">Contact</a>
        </nav>
        <button class="menu-icon" aria-label="menu"><span></span></button>
      </div>
    </div>
  </header>`;
}
function footer(){
 return `<footer class="footer"><div class="shell">
 <strong>${D.site.labName}</strong><br>${D.site.department}, ${D.site.university}<br>${D.site.email}
 </div></footer>`;
}
function mount(){document.body.insertAdjacentHTML("afterbegin",header());document.body.insertAdjacentHTML("beforeend",footer())}

function home(){
 const hero=document.querySelector("#hero-image"); if(hero && !hero.getAttribute("src")) hero.src="assets/hero-pnu-view.png";
 document.querySelector("#hero-title").textContent=D.site.labName;
 /*document.querySelector("#hero-full").textContent=D.site.fullName;*/
 document.querySelector("#hero-full").innerHTML =
  '<span class="prism-letter">P</span>robing and ' +
  '<span class="prism-letter">R</span>esolving biological complexity<br>' +
  'through <span class="prism-letter">I</span>ntegrative ' +
  '<span class="prism-letter">S</span>cience and ' +
  '<span class="prism-letter">M</span>edicine';
 document.querySelector("#hero-tag").textContent=D.site.tagline;
 document.querySelector("#about-text").textContent=D.about.intro;
 const pnu=document.querySelector("#pnu-img"); if(pnu && !pnu.getAttribute("src")) pnu.src="assets/pnu-seal-hires.jpg";
 const hospital=document.querySelector("#hospital-img"); if(hospital && !hospital.getAttribute("src")) hospital.src="assets/prism-logo-display-v2.png";
 const projects = document.querySelector("#projects");
 if (projects) {
   projects.innerHTML = D.research.slice(0,3).map(r=>`
   <article class="project-card">
     <div class="project-thumb"><img src="assets/prism-logo-display-v2.png" alt="PRISM"></div>
     <div class="project-body"><div class="num">${r.number}</div><h3>${r.title}</h3><p>${r.short}</p></div>
   </article>`).join("");
 }
}
function about(){
 document.querySelector("#about-copy").innerHTML=`<p>${D.about.intro}</p><p>${D.about.second}</p>`;
 const vals=[
  ["P","Probing","복잡한 생명현상과 질문을 깊이 탐구합니다."],
  ["R","Resolving","복잡성을 설명 가능한 구조와 원리로 풀어냅니다."],
  ["I","Integrative","수학·계산·생물학·의학의 관점을 통합합니다."],
  ["S","Science","엄밀한 분석과 탐구를 바탕으로 지식을 구축합니다."],
  ["M","Medicine","생물학적 발견을 의학적 의미와 연결합니다."]
 ];
 document.querySelector("#values").innerHTML=vals.map(v=>`<div class="value"><strong>${v[0]}</strong><h3>${v[1]}</h3><p>${v[2]}</p></div>`).join("");
}
function research(){
 document.querySelector("#research-list").innerHTML=D.research.map(r=>`<article class="research-item"><div class="num">${r.number}</div><h3>${r.title}</h3><p>${r.detail}</p></article>`).join("");
}
function people() {
  const p = D.people.pi;

  const pi = document.querySelector("#pi");
  if (pi) {
    pi.innerHTML = `
      <img src="${p.photo}" alt="${p.name}" class="pi-photo">
      <div class="pi-summary">
        <div class="pi-label">PRINCIPAL INVESTIGATOR</div>
        <h2>${p.name}</h2>
        <div class="pi-role">${p.role}</div>
        <p>${p.bio}</p>
        <div class="pi-links">
          <a class="pi-contact-button pi-email-link" href="mailto:${D.site.email}">
            <span class="pi-email-label">Email</span>
            <span class="pi-email-address">${D.site.email}</span>
          </a>
          <a class="pi-contact-button" href="https://github.com/hansong798" target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </div>
      </div>
    `;
  }

  const biography = document.querySelector("#pi-biography");
  if (biography && Array.isArray(p.biography)) {
    biography.innerHTML = p.biography.map(paragraph => `<p>${paragraph}</p>`).join("");
  }

  const interests = document.querySelector("#pi-interests");
  if (interests && Array.isArray(p.interests)) {
    interests.innerHTML = p.interests.map(item => `
      <article class="interest-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `).join("");
  }

  const career = document.querySelector("#pi-career");
  if (career) {
    const education = Array.isArray(p.education)
      ? p.education.map(item => ({
          period: item.period,
          title: item.degree,
          institution: item.institution,
          type: "Education"
        }))
      : [];

    const appointments = Array.isArray(p.appointments)
      ? p.appointments.map(item => ({
          period: item.period,
          title: item.position,
          institution: item.institution,
          type: "Appointment"
        }))
      : [];

    career.innerHTML = [...appointments, ...education].map(item => `
      <article class="timeline-item">
        <div class="timeline-period">${item.period}</div>
        <div>
          <div class="timeline-type">${item.type}</div>
          <div class="timeline-title-line">
            <h3>${item.title}</h3>
            <span class="timeline-institution-inline">· ${item.institution}</span>
          </div>
        </div>
      </article>
    `).join("");
  }

  const publications = document.querySelector("#pi-selected-publications");
  if (publications && Array.isArray(p.selectedPublications)) {
    publications.innerHTML = p.selectedPublications.map((item, index) => `
      <article class="cv-publication">
        <div class="publication-index">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <div class="publication-meta">${item.year} · ${item.contribution}</div>
          <h3>${item.title}</h3>
          <p>${item.journal}</p>
        </div>
      </article>
    `).join("");
  }

  const achievements = document.querySelector("#pi-achievements");
  if (achievements) {
    const funding = Array.isArray(p.funding)
      ? p.funding.map(item => ({
          year: item.period,
          title: item.title,
          detail: item.organization,
          type: "Funding"
        }))
      : [];

    const awards = Array.isArray(p.awards)
      ? p.awards.map(item => ({
          year: item.year,
          title: item.title,
          detail: "",
          type: "Award"
        }))
      : [];

    achievements.innerHTML = [...funding, ...awards].map(item => `
      <article class="achievement-item">
        <div class="achievement-year">${item.year}</div>
        <div>
          <div class="achievement-type">${item.type}</div>
          <h3>${item.title}</h3>
          ${item.detail ? `<p>${item.detail}</p>` : ""}
        </div>
      </article>
    `).join("");
  }
}
function publications(){
 document.querySelector("#pubs").innerHTML=D.publications.map(p=>`<article class="pub"><div class="year">${p.year}</div><h3>${p.title}</h3><p>${p.authors}<br><em>${p.journal}</em></p></article>`).join("");
}
function join(){
 document.querySelector("#join-intro").textContent=D.join.intro;
 document.querySelector("#looking").innerHTML=D.join.lookingFor.map(x=>`<li>${x}</li>`).join("");
 document.querySelector("#training").innerHTML=D.join.training.map(x=>`<li>${x}</li>`).join("");
 document.querySelector("#apply").textContent=D.join.application;
}
function contact(){
 document.querySelector("#contact").innerHTML=`<h2>Contact</h2><p><strong>Email</strong><br>${D.site.email}</p><p><strong>Address</strong><br>${D.site.address}</p>`;
}
document.addEventListener("DOMContentLoaded",()=>{mount();const p=document.body.dataset.page;if(p==="home")home();if(p==="about")about();if(p==="research")research();if(p==="people")people();if(p==="publications")publications();if(p==="join")join();if(p==="contact")contact()});

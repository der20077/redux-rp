const onlineCount = document.getElementById("onlineCount");
const footerOnline = document.getElementById("footerOnline");
const serverIp = document.getElementById("serverIp");

const statCard = document.querySelectorAll(".stat-card");
statCard.forEach((card) => {
  card.style.boxShadow = "0 5px 15px rgba(0, 168, 255, 0.3)";
  card.style.transition = " transform 0.3s ease";
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
const btnCopy = document.querySelector(".ip-box button");
btnCopy.addEventListener("mouseenter", () => {
  btnCopy.style.background = "#00a8ff";
  btnCopy.style.color = "White";
  btnCopy.classList.add("pulse");
});
btnCopy.addEventListener("mouseleave", () => {
  btnCopy.style.background = " rgba(0, 168, 255, 0.2)";
  btnCopy.style.color = " #00a8ff";
  btnCopy.classList.remove("pulse");
});
const rulesHeading = document.querySelector("#rulesSection h2");

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#00a8ff";
    link.style.transform = "translateY(-2px)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "#b0b0b0";
    link.style.transform = "translateY(0px)";
  });
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const sectionName = this.getAttribute("data-section");
    const sectionId = sectionName + "Section";
    navLinks.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
    this.classList.add("active");
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});

const contentSections = document.querySelectorAll(".content-section");

const ruleTitles = document.querySelectorAll(".rule-title");
ruleTitles.forEach((title) => {
  title.style.cursor = "pointer";
  title.addEventListener("click", function () {
    const ruleContent = this.nextElementSibling;
    ruleContent.classList.toggle("active");
    console.log("Следующий элемент:", ruleContent);
    console.log("Его классы:", ruleContent.className);
    console.log("Это div?", ruleContent.tagName);
  });
});

const statCardCol = document.getElementsByClassName("stat-card");
const ruleContents = document.getElementsByClassName("rule-content");

const factionsList = document.getElementById("factionsList");
const factionsDivs = factionsList ? factionsList.querySelectorAll("div") : [];

const rulesSection = document.getElementById("rulesSection");
const rulesParagraphs = rulesSection ? rulesSection.querySelectorAll("p") : [];

const copyBtn = document.getElementById("copyIpBtn");
const parentOfCopyBtn = copyBtn ? copyBtn.parentElement : null;

const mainNav = document.getElementById("mainNav");
const firstChildOfNav = mainNav ? mainNav.firstElementChild : null;

const staffSection = document.getElementById("staffSection");
const prevSection = staffSection ? staffSection.previousElementSibling : null;

const homeSection = document.getElementById("homeSection");
const nextSection = homeSection ? homeSection.nextElementSibling : null;

const bodyChildren = document.body.children;

// ========== ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ ==========
const setOnline = (count) => {
  if (onlineCount) onlineCount.textContent = count;
  if (footerOnline) footerOnline.textContent = count;
};

setOnline("1250");

if (serverIp) {
  serverIp.textContent = "play.redux-rp.com:7777";
}

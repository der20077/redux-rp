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
    const icon = this.querySelector(".fa-chevron-down, .fa-chevron-up");
    ruleContent.classList.toggle("active");
    const isOpen = ruleContent.classList.contains("active");
    if (isOpen) {
      icon.classList.remove("fa-chevron-down"); // Убираем стрелку вниз
      icon.classList.add("fa-chevron-up"); // Добавляем стрелку вверх
    } else {
      icon.classList.remove("fa-chevron-up"); // Убираем стрелку вверх
      icon.classList.add("fa-chevron-down"); // Добавляем стрелку вниз
    }
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

// ========== ДАННЫЕ ФРАКЦИЙ ==========
const factionsData = [
  // переименовал для понятности
  {
    name: "Правительство",
    leader: "Konstantin Makarov",
    members: 1,
    icon: "fas fa-landmark",
    color: "#78ff4bff",
    description:
      "Высший орган власти области. Контролирует все государственные структуры.",
  },
  {
    name: "ФСБ",
    leader: "Adrian Weklem",
    members: 1,
    icon: "fas fa-user-secret",
    color: "#000000ff",
    description:
      "Борьба с терроризмом, шпионажем, особо опасными преступлениями.",
  },
  {
    name: "МО",
    leader: "Polina Samoilova",
    members: 1,
    icon: "fas  fa-fighter-jet",
    color: "#564506ff",
    description: "Армия, военные базы, оборона  области",
  },
  {
    name: "МВД",
    leader: "Dima Rystov",
    members: 2,
    icon: "fas fa-shield-alt",
    color: "#3498db",
    description: "Полиция, ГИБДД",
  },
  {
    name: "МЗ",
    leader: "Makarino Pel",
    members: 1,
    icon: "fas fa-ambulance",
    color: "#ee537aff",
    description: "Больницы, скорая помощь, медицина",
  },
];

// ========== ФУНКЦИЯ ОТОБРАЖЕНИЯ ФРАКЦИЙ ==========
function renderFactions() {
  const container = document.getElementById("factionsList");

  // Очищаем контейнер (на случай если уже что-то есть)
  container.innerHTML = "";

  // Проходим по всем фракциям
  factionsData.forEach(function (faction) {
    // Создаём HTML для одной фракции
    const factionHTML = `
  <div class="faction-card" 
       style="border-left: 4px solid ${faction.color}"
       data-name="${faction.name.toLowerCase()}"
       data-members="${faction.members}"
       data-has-leader="${faction.leader ? "true" : "false"}">
    <div class="faction-header">
      <i class="${faction.icon}"></i>
      <h4>${faction.name}</h4>
    </div>
    <div class="faction-info">
      <p><strong>Лидер:</strong> ${faction.leader}</p>
      <p><strong>Состав:</strong> ${faction.members} человек</p>
      <p>${faction.description}</p>
    </div>
  </div>
`;

    container.innerHTML += factionHTML;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderFactions();
});

const filterFraction = () => {
  const searcText = document
    .getElementById("searchFaction")
    .value.toLowerCase();
  const minMembers = parseInt(document.getElementById("minMembers").value);
  const checboxLeader = document.getElementById("showWithLeader").checked;
  const allCard = document.querySelectorAll(".faction-card");
  allCard.forEach((card) => {
    const cardName = card.getAttribute("data-name");
    const cardMember = parseInt(card.getAttribute("data-members"));
    const cardLeader = card.getAttribute("data-has-leader") === "true";

    let showCard = true;
    if (searcText && !cardName.includes(searcText)) {
      showCard = false;
    }
    if (cardMember < minMembers) {
      showCard = false;
    }
    if (checboxLeader && !cardLeader) {
      showCard = false;
    }
    card.style.display = showCard ? "block" : "none";
  });
};

const searcInput = document.getElementById("searchFaction");

searcInput.addEventListener("input", filterFraction);

const minMembersInput = document.getElementById("minMembers");
const minMembersValue = document.getElementById("membersValue");

minMembersInput.addEventListener("input", () => {
  minMembersValue.textContent = minMembersInput.value;
  filterFraction();
});

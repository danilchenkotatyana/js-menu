const openIcon = document.querySelector(".openIcon");
openIcon.onclick = function (e) {
  e.preventDefault();
  document.querySelector("nav").classList.add("nav__open");
};

const closeIcon = document.querySelector(".close-icon");
closeIcon.onclick = function (e) {
  e.preventDefault();
  document.querySelector("nav").classList.remove("nav__open");
};

function buildSubitem1(subitem1, subindex1) {
  const subitem1Html = `<li key='${subindex1}'><a href='${subitem1.url}'>${subitem1.name}</a></li>`;
  return subitem1Html;
}

function buildSubitem(subitem, subindex) {
  const subitem1 = subitemData1();
  function subitemData1() {
    if (subitem.type && subitem.type.length) {
      return (
        `<div class="arrow"></div><ul class="submenu1">` +
        subitem.type.map(buildSubitem1).join("") +
        `</ul>`
      );
    } else {
      return [];
    }
  }
  const subitemHtml = `<li key='${subindex}'><a href='${subitem.url}'>${subitem.name}</a>${subitem1}</li>`;
  return subitemHtml;
}

const app = document.querySelector(".nav__body");
app.innerHTML =
  `<ul>` +
  data.menu.map((item, index) => {
      const subitems = subitemData();
      function subitemData() {
        if (item.type && item.type.length) {
          return (
            `<div class="arrow"></div><ul class="submenu">` + item.type.map(buildSubitem).join("") + `</ul>`
          );
        } else {
          return [];
        }
      }
      const itemHtml = `<li key='${index}'><a href='${item.url}'>${item.name}</a>${subitems}</li>`;
      return itemHtml;
    }).join("") +
  `</ul>`;

const arrElemntes = document.querySelectorAll(".arrow");
arrElemntes.forEach(function (item) {
  item.onclick = function (e) {
    e.preventDefault();
    (e.target == this) &&
      this.nextSibling.classList.toggle("open");
      this.classList.toggle("on");
  };
});

"use strict";
document.addEventListener("DOMContentLoaded", async function () {
  data = JSON.stringify(data); //parse
  return data;
});

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

const app = document.querySelector(".nav__body");
app.innerHTML =
  "<ul>" +
  data.menu
    .map((item, index) => {
      const subitemData = () => {
        if (item.type && item.type.length) {
          return (
            '<div class="arrow"></div>' +
            '<ul class="submenu">' +
            item.type
              .map((subitem, subindex) => {
                const subitemData1 = () => {
                  if (subitem.type && subitem.type.length) {
                    return (
                      '<div class="arrow"></div>' +
                      '<ul class="submenu1">' +
                      subitem.type
                        .map((subitem1, subindex1) => {
                          const subitem1Html =
                            '<li key="' +
                            subindex1 +
                            '">' +
                            '<a href="' +
                            subitem1.url +
                            '">' +
                            subitem1.name +
                            "</a>" +
                            "</li>";
                          return subitem1Html;
                        })
                        .join("") +
                      "</ul>"
                    );
                  } else {
                    return [];
                  }
                };
                const subitemHtml =
                  '<li key="' +
                  subindex +
                  '">' +
                  '<a href="' +
                  subitem.url +
                  '">' +
                  subitem.name +
                  "</a>" +
                  subitemData1() +
                  "</li>";
                return subitemHtml;
              })
              .join("") +
            "</ul>"
          );
        } else {
          return [];
        }
      };
      const itemHtml =
        '<li key="' +
        index +
        '">' +
        '<a href="' +
        item.url +
        '">' +
        item.name +
        "</a>" +
        subitemData() +
        "</li>";
      return itemHtml;
    })
    .join("") +
  "</ul>";

// const toggleArrow = document.querySelector(".arrow");

// toggleArrow.onclick = function (e) {
//   e.preventDefault();
//   if (e.target == this){
//     this.nextSibling.classList.toggle("open");
//     this.classList.toggle("on");
//   }
// };
const arrElemntes = document.querySelectorAll(".arrow");
arrElemntes.forEach(function (item) {
  item.onclick = function (e) {
    e.preventDefault();
    if (e.target == this) {
      this.nextSibling.classList.toggle("open");
      this.classList.toggle("on");
    }
  };
});

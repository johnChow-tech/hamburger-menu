document.addEventListener("DOMContentLoaded", () => {
  initHamburgerBtn();
  initSubMenu();
});

// Mostly use vars
const isOpen = "is-open";

const hamburgerBtnToggle = ".js-hamburger-btn-toggle";
const naviLinksToggle = ".js-navi-links-toggle";
const hasSubMenuToggle = ".js-navi-link-has-submenu-toggle";
const subMenuToggle = ".js-sub-menu-toggle";

const hamburgerBtn = document.querySelector(hamburgerBtnToggle);
const naviLinks = document.querySelector(naviLinksToggle);
const hasSubMenu = document.querySelector(hasSubMenuToggle);
const subMenu = document.querySelector(subMenuToggle);
/**
 * 初始化汉堡菜单按钮
 * @param null
 */
function initHamburgerBtn() {
  hamburgerBtn.addEventListener("click", () => {
    naviLinks.classList.toggle(isOpen);
    if (subMenu.classList.contains(isOpen)) {
      subMenu.classList.remove(isOpen);
    }
  });
}

function initSubMenu() {
  const btn = document.querySelector(hasSubMenuToggle);
  const display = document.querySelector(subMenuToggle);
  btn.addEventListener("click", (event) => {
    if (event.target.closest(".sub-menu")) {
      return;
    }
    display.classList.toggle(isOpen);
  });
}

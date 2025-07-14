document.addEventListener("DOMContentLoaded", () => {});

const hamburgerBtnClass = ".hamburger-btn";
const naviLinksClass = ".navi-links";
/**
 * 初始化汉堡菜单按钮
 * @param null
 */
function initHamburgerBtn() {
  const btn = document.getElementsByClassName(hamburgerBtnClass);
  const links = document.getElementsByClassName(naviLinksClass);
  const isOpen = "is-open";

  btn.addEventListener("click", () => {
    links.classList.toggle(isOpen);
  });
}

const menu = ()=> {
  let header = document.querySelector("header"),
    menu = document.querySelector(".header__menu"),
    link = document.querySelector(".header__link");

  header.addEventListener("click", (e) => {
    if (e.target.classList.contains("header")) {
      menu.style = `
        left:-100%;
       `;
      link.style = `
        opacity:1;`;
    } else if (
      e.target.classList.contains("header__btn") ||
      e.target.classList.contains("header__btn-line")
    ) {
      menu.style = `
        transition:0.5s;
        left:0;`;
      link.style = `
        transition:0.5s;
        opacity:0;
        `;
    }
  });
};

export default menu
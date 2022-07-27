// const contentNavbar = document.querySelector(".content-nav");
// const mainContent = document.querySelector(".content-inner");
// console.log(mainContent);
// contentNavStyle = (e) => {
//   contentNavbar.style.borderBottomLeftRadius = "12px";
//   contentNavbar.style.borderBottomRightRadius = "12px";
// };
// document.addEventListener("scroll", contentNavStyle);

window.addEventListener("scroll", (event) => {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  var header = document.getElementsByClassName(".content-nav");
  if (top === 0) {
    header.style.borderBottomLeftRadius = "0";
    header.style.borderBottomRightRadius = "0";
  } else {
    header.style.borderBottomLeftRadius = "12px";
    header.style.borderBottomRightRadius = "12px";
  }
});

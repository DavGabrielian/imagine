openNav = () => {
  (document.getElementById("menu").style.display = "none") &&
    (document.getElementById("navbar").style.display = "flex");
};
closeNav = () => {
  (document.getElementById("navbar").style.display = "none") &&
    (document.getElementById("menu").style.display = "block");
};

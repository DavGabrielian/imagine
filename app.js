openNav = () => {
  (document.getElementById("menu").style.display = "none") &&
    (document.getElementById("navbar").style.display = "flex") &&
    (document.getElementById("closeMenu").style.display = "block");
};

closeNav = () => {
  (document.getElementById("navbar").style.display = "none") &&
    (document.getElementById("menu").style.display = "block") &&
    (document.getElementById("closeMenu").style.display = "none");
};

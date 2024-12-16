let burguerMenu = document.querySelector(".burguer");
let navCross = document.querySelector(".cross");
let navBarMenu = document.querySelector(".navBar");

burguerMenu.style.visibility = "visible";
navBarMenu.style.visibility = "hidden";

burguerMenu.addEventListener("click", () => {
    burguerMenu.style.visibility = "hidden";
    navBarMenu.style.visibility = "visible";

})


navCross.addEventListener("click", () => {
    burguerMenu.style.visibility = "visible";
    navBarMenu.style.visibility = "hidden";
})

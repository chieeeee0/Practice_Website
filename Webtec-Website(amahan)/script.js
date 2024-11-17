var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function showError(){
    alert("Error: Invalid username or password");
}

function checkLogin(){
    const correctUsername = "admin";
    const correctPassword = "1234";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword){
        window.location.href="homepage.html";
    }
    else{
        showError();
    }
    return false;
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

function homeClick(){
    window.location.href="homepage.html";
}
function productClick(){
    window.location.href="productspage.html";
}
function aboutClick(){
    window.location.href="aboutpage.html";
}
function reviewClick(){
    window.location.href="reviewpage.html";
}

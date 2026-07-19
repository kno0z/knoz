const menu=document.querySelector(".menu");

const menuButton=document.querySelector(".menu-button");

if(menuButton){

menuButton.onclick=()=>{

menu.classList.toggle("active");

};

}
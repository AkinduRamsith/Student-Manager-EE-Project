const navbar=document.getElementById("navbar");
const menu=document.getElementById("menu-navbar");

window.onscroll=()=>{
    if(window.pageYOffset>=menu.offsetTop){
        navbar.classList.add("sticky");

    }else{
        navbar.classList.remove("sticky");
    }
}
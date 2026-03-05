let btnMenu = document.getElementById("btn-menu");
let sideBar = document.querySelector(".sidebar-list");
let closeSideBar = document.getElementById("btn-close-sidebar");
let body = document.getElementsByTagName("body");

btnMenu.addEventListener("click", () => {
    if (sideBar.style.right === "-225px") {
        sideBar.style.right = "0px";
        body.style.backGroundColor = "grey";
    } else {
        sideBar.style.right = "-225px";
    }
});


closeSideBar.addEventListener("click", ()=>{
    if(sideBar.style.right==="0px"){
        sideBar.style.right = "-225px";
    }else{
        sideBar.style.right ="0px";
    }
})
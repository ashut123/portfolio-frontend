/*=====  toggle style switcher ==== */
const styleSwitcherToggle=document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");

})
// hide style-switcher on scroll
window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*====theme colors===== */

function switchTheme(theme) {
    const body = document.body;
    
    // Remove all theme-related classes
    body.classList.remove('theme-1', 'theme-2', 'theme-3','theme-4','theme-5');
    
    // Add the selected theme class
    body.classList.add(theme);
}

// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color){
//     console.log("color", color);
//     alternateStyles.forEach((style)=>{
//         if(color === style.title)
//         {
//             style.removeAttribute("disabled");
//         }
//         else{
//             style.setAttribute("disabled","true");
//         }
//     })
// }
/*====theme light and dark mode===== */
const dayNight = document.querySelector(".day-night");
console.log("dayNight", dayNight)
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})


window.switchTheme = switchTheme;
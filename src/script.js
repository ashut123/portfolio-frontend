/** ================ typing animatin============**/
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Software Developer", "UI Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/** ================ typing animation============**/
const nav = document.querySelector(".nav"),
     navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
let allSection = document.querySelectorAll(".section");
console.log("allSection", allSection);
   const totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    // console.log(navList[i])
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);

                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")

}
function updateNav(element) {

    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }

}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();

})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }


}


function sendMessage() {
    console.log("Message sent!");
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!subject) {
        alert("Please enter the subject.");
        return;
    }
    if (!message) {
        alert("Please enter your message.");
        return;
    }

    // Send data to the server
    fetch("https://portfolio-backend-fawn-three.vercel.app/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
    })
        .then((response) => {
            if (response.ok) {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            } else {
                alert("Failed to send the message. Please try again later.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




window.sendMessage = sendMessage;
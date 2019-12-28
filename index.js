const panelsToHide = ["first-body", "us", "greet", "blog", "success", "connect", "ba1", "mobile_navigator"];
const closePanels = () => {
    window.scrollTo(0, 0);
    for (let j = 0; j < panelsToHide.length; ++j) {
        document.getElementById(panelsToHide[j]).style.display = "none"; // Closes all open tabs
    }
}

if (window.innerWidth < window.innerHeight) {
    let arr = document.getElementsByClassName("frontpage");
    for (let i = 0; i < arr.length; ++i) {
        arr[i].style.height = "70vh";
    }
    arr = document.getElementsByClassName("forepage");
    for (let i = 0; i < arr.length; ++i) {
        arr[i].style.height = "70vh";
    }
    let html = document.getElementsByTagName('body')[0];
    html.style.setProperty("--top-bar-size", "10vh");
    arr = document.getElementsByClassName("top_left");
    for (let i = 0; i < arr.length; ++i) arr[i].style.display = "none";
    let mlogo = document.getElementById("logo")
    mlogo.style.display = "block";
    mlogo.style.width = "8vh";
    mlogo.style.height = "8vh";
    mlogo.style.left = "calc(50vw - 16vh)";
    mlogo.style.marginTop = "1vh";
    document.getElementById("menu_control").style.display = "block";
    let menu_clicked = false;
    document.getElementById("menu_control").addEventListener("click", () => {
        if (menu_clicked) {
            let mobnav = document.getElementById("mobile_navigator");
            mobnav.style.display = "none";
            menu_clicked = !menu_clicked;
        } else {
            let mobnav = document.getElementById("mobile_navigator");
            mobnav.style.display = "block";
            let buttons = document.getElementsByClassName("mob_button");
            console.log(buttons)
            for (let i = 0; i < buttons.length; ++i) {
                document.getElementById(buttons[i].id).addEventListener("click", () => { // If clicks on button, close everything and open that.
                    closePanels();
                    console.log(panelsToHide[i] + " HEllo");
                    console.log(i);
                    if (i >= 6) document.getElementById(panelsToHide[i - 6]).style.display = "block";
                    else document.getElementById(panelsToHide[i]).style.display = "block";
                })
            }
            menu_clicked = !menu_clicked;
        }
    });
}
let buttons = document.getElementsByClassName("top_left");
closePanels();
document.getElementById("first-body").style.display = "block"; // Shows the homepage
for (let i = 0; i < buttons.length; ++i) {
    document.getElementById(buttons[i].id).addEventListener("click", () => { // If clicks on button, close everything and open that.
        // window.scrollTo(0, 0);
        // for (let j = 0; j < panelsToHide.length; ++j) {
        //     document.getElementById(panelsToHide[j]).style.display = "none";
        //     if (i == j) document.getElementById(panelsToHide[i]).style.display = "block";
        // }
        closePanels();
        console.log(panelsToHide[i] + " HEllo")
        console.log(i)
        if (i >= 6) document.getElementById(panelsToHide[i-6]).style.display = "block";
        else document.getElementById(panelsToHide[i]).style.display = "block";
    })
}
document.getElementById("logo").addEventListener("click", () => { // Logo goes to main screen
    for (let j = 0; j < panelsToHide.length; ++j) {
        document.getElementById(panelsToHide[j]).style.display = "none";
    }
    document.getElementById("first-body").style.display = "block";
    window.scrollTo(0, 0);
})
window.onbeforeunload = () => { // Set scroll to top at the start
    window.scrollTo(0, 0);
}
let w = 0;
const go = (setInterval(() => { // Fading one
    // console.log("Hello?");
    // window.requestAnimationFrame(ani);
    // console.log("Hi?");
    let ele = document.getElementById("miss");
    const words = ["Enrich Keystone's Robotics Program", "Create an Engineering Culture for Keystone School", "Create STEM Opportunities", "Grow and Learn Throughout the Year"];
    ele.innerHTML = words[w];
    w = (w+1)%words.length;
}, 1500));
// let q = 0, j = 0, swit = true;
// const go = setInterval(() => {
//     let ele = document.getElementById("miss");
//     let words = ["Enrich Keystone's Robotics Program", "Create an Engineering Culture for Keystone School", "Create new STEM Opportunities", "Grow and Learn Throughout the Year"];
//     ele.innerHTML = words[j].substring(0, q);
//     // console.log(words[j].substring(0, q));
//     if (swit) {
//         q++;
//         if (q > words[j].length+2) swit = false;
//     }
//     else {
//         q--;
//         if (q < 0) {
//             swit = true;
//             j = (j + 1) % words.length;
//         }
//     }
// }, 75);
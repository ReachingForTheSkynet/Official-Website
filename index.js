let buttons = document.getElementsByClassName("top_left");
console.log(buttons);
let placesToGo = [1, 2, 3, 4, 5, 6]; // A list of HTML files;
console.log(buttons[0].id);
window.scrollTo(0, 0);
let i = 0;
let x = buttons[i].id;
let panelsToHide = ["first-body", "us", "greet", "blog", "success", "connect"];
for (let j = 0; j < panelsToHide.length; ++j) {
    document.getElementById(panelsToHide[j]).style.display = "none";
    // if (i == j) document.getElementById(panelsToHide[i]).style.display = "block";
}
document.getElementById("first-body").style.display = "block";
console.log(panelsToHide.length);
console.log(buttons.length);
for (let i = 0; i < buttons.length; ++i) {
    console.log(buttons[i].id, panelsToHide[i]);
    document.getElementById(buttons[i].id).addEventListener("click", () => {
        // console.log("Hello");
        window.scrollTo(0, 0);
        let x = buttons[i].id;
        // let panelsToHide = ["first-body", "us", "greet", "blog", "success", "connect"];
        for (let j = 0; j < panelsToHide.length; ++j) {
            document.getElementById(panelsToHide[j]).style.display = "none";
            if (i == j) document.getElementById(panelsToHide[i]).style.display = "block";
        }
    })
}
document.getElementById("logo").addEventListener("click", () => {
    // let panelsToHide = ["first-body", "us", "greet", "blog", "success", "connect"];
    for (let j = 0; j < panelsToHide.length; ++j) {
        document.getElementById(panelsToHide[j]).style.display = "none";
    }
    document.getElementById("first-body").style.display = "block";
    window.scrollTo(0, 0);
})
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}
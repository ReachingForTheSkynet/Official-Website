let buttons = document.getElementsByClassName("top_left");
// console.log(buttons);
let placesToGo = [1, 2, 3, 4, 5, 6]; // A list of HTML files;
// console.log(buttons[0].id);
window.scrollTo(0, 0);
let i = 0;
let x = buttons[i].id;
let panelsToHide = ["first-body", "us", "greet", "blog", "success", "connect"];
for (let j = 0; j < panelsToHide.length; ++j) {
    document.getElementById(panelsToHide[j]).style.display = "none";
    // if (i == j) document.getElementById(panelsToHide[i]).style.display = "block";
}
document.getElementById("first-body").style.display = "block";
// console.log(panelsToHide.length);
// console.log(buttons.length);
for (let i = 0; i < buttons.length; ++i) {
    // console.log(buttons[i].id, panelsToHide[i]);
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
let w = 0;
const go = (setInterval(() => {
    // console.log("Hello?");
    // window.requestAnimationFrame(ani);
    // console.log("Hi?");
    let ele = document.getElementById("miss");
    const words = ["Enrich Keystone's Robotics Program", "Create an Engineering Culture for Keystone School", "Create STEM Opportunities", "Grow and Learn Throughout the Year"];
    ele.innerHTML = words[w];
    w = (w+1)%words.length;
}, 2000));
// let w = 0, op = 0;
// const ani = () => {
//     // console.log("Hello?");
//     window.requestAnimationFrame(ani);
//     // console.log("Hi?");
//     let ele = document.getElementById("miss");
//     const words = ["Enrich Keystone's Robotics Program", "Create an Engineering Culture for Keystone School", "Create STEM Opportunities", "Grow and Learn Throughout the Year"];
//     ele.innerHTML = words[w];
//     console.log(ele.style.opacity);
//     console.log("HI");
//     if (ele.style.opacity >= 1) {
//         while (!ele.style.opacity < 0) {
//             setTimeout(
//                 () => {
//                     ele.style.opacity -= 0.1;
//                     if (ele.style.opacity < 0) {
//                         ele.style.opacity = 0;
//                         return;
//                     }
//                     console.log("NUM1")
//                 }, 10
//             )
//         }
//     }
//     if (ele.style.opacity <= 0) {
//         while (!ele.style.opacity >= 1) {
//             setTimeout(
//                 () => {
//                     ele.style.opacity += 0.1;
//                     if (ele.style.opacity >= 1) {
//                         ele.style.opacity = 1;
//                         return;
//                     }
//                     console.log("NUM2")
//                 }, 10
//             )
//         }
//         // let y = setInterval(() => {
//         //     ele.style.opacity += 0.1;
//         //     if (ele.style.opacity > 1) {
//         //         ele.style.opacity = 1;
//         //         clearInterval(y);
//         //     }
//         //     console.log("NUM2")
//         // }, 10)
//     }
//     console.log(ele.style.opacity);
//     // let timer1 = setInterval(() => {
//     //     if (op >= 1) {
//     //         clearInterval(timer1);
//     //     }
//     //     x.style.opacity = op;
//     //     // x.style.filter = "alpha(opacity=" + op * 100 + ")";
//     //     op += op * 0.1;
//     // }, 10);
//     // const timer2 = setInterval(function () {
//     //     if (op <= 0.1) {
//     //         clearInterval(timer2);
//     //         w=(w+1)%words.length;
//     //     }
//     //     x.style.opacity = op;
//     //     // x.style.filter = 'alpha(opacity=' + op * 100 + ")";
//     //     op -= op * 0.1;
//     // }, 50);
// };
// ani();
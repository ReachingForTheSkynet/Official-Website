let buttons = document.getElementsByClassName("top_left");
let placesToGo = [1, 2, 3, 4, 5, 6]; // A list of HTML files;
window.scrollTo(0, 0);
let i = 0;
const panelsToHide = ["first-body", "us", "greet", "blog", "success", "connect", "ba1"];
for (let j = 0; j < panelsToHide.length; ++j) {
    document.getElementById(panelsToHide[j]).style.display = "none"; // Closes all open tabs
}
document.getElementById("first-body").style.display = "block"; // Shows the homepage

for (let i = 0; i < buttons.length; ++i) {
    document.getElementById(buttons[i].id).addEventListener("click", () => { // If clicks on button, close everything and open that.
        window.scrollTo(0, 0);
        for (let j = 0; j < panelsToHide.length; ++j) {
            document.getElementById(panelsToHide[j]).style.display = "none";
            if (i == j) document.getElementById(panelsToHide[i]).style.display = "block";
        }
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


const readTxt = (file) => {
    // let xhttp = new XMLHttpRequest();
    // file.open("GET", link, false);
    // let txt;
    // xhttp.onreadystatechange = (e) => {
    //     if (e.target.readyState == 4 && e.target.status == 200) {
    //         // console.log(txt);
    //         txt = e.target.responseText;
    //         console.log(txt);
    //     }
    //     console.log("ERROR");
    // }
    // xhttp.open("GET", link);
    // return fetch(url).then(response => {
    //     if (!response.ok) {
    //         throw new Error("HTTP error " + response.status); // Rejects the promise
    //     }
    // });
    // return txt;
    // var f = new XMLHttpRequest();
    // f.open("GET", file, false);
    // f.onreadystatechange = function () {
    //     if (f.readyState === 4) {
    //         if (f.status === 200 || f.status == 0) {
    //             var res = f.responseText;
    //             alert(res);
    //         }
    //     }
    // }
    // f.send(null);
    // function reqListener() {
    //     console.log(this.responseText);
    // }

    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", reqListener);
    // oReq.open("GET", "blog1.txt", false);
    // oReq.send();

}
// function readTextFile(file) {
    // var rawFile = new XMLHttpRequest();
    // rawFile.open("GET", file, true);
    // rawFile.onreadystatechange = function () {
    //     if (rawFile.readyState === 4) {
    //         if (rawFile.status === 200 || rawFile.status == 0) {
    //             var allText = rawFile.responseText;
    //             alert(allText);
    //         }
    //     }
    // }
    // rawFile.send(null);
// }

var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};

// const fs = require("fs"); // File server for later
/* For Blog Articles: */
// document.getElementById("key").addEventListener("click", () => {
//     console.log("CLICKED");
//     window.scrollTo(0, 0);
//     for (let j = 0; j < panelsToHide.length; ++j) {
//         document.getElementById(panelsToHide[j]).style.display = "none";
//     }
//     document.getElementById("ba1").style.display = "inline-block";
//     let somthing = readTextFile("blog1.txt");
//     document.getElementById("ba1").innerHTML = somthing;
//     console.log(somthing);
// });
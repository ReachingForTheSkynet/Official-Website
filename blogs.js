const fs = require("fs"); // File server for later
/* For Blog Articles: */
// const panelsToHide = ["first-body", "us", "greet", "blog", "success", "connect", "ba1"];
document.getElementById("key").addEventListener("click", () => {
    console.log("CLICKED");
    window.scrollTo(0, 0);
    for (let j = 0; j < panelsToHide.length; ++j) {
        document.getElementById(panelsToHide[j]).style.display = "none";
    }
    document.getElementById("ba1").style.display = "inline-block";
    fs.readFile('blogs/blog1.txt', function (err, data) {
        if (err) console.log("ERROR");
        document.getElementById("ba1").innerHTML = data;
    });
});
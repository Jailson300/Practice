let divs = document.querySelectorAll(".box");

let idx = 1;

for (div of divs){
    div.innerText = `new unique box ${idx}`;
    idx++;
}

let heading = document.createElement("h1");
heading.innerText = "this is a test heading";
document.querySelector("div").append(heading);

let divs = document.querySelectorAll(".box");

let idx = 1;

for (div of divs){
    div.innerText = `new unique box ${idx}`;
    idx++;
}
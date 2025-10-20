let boxName = document.querySelector(".box");

boxName.onmouseover = () => {
    boxName.innerHTML = "<i>This is hover</i>";
    boxName.style.backgroundColor = "green";
 
}
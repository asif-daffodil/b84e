const myClick = document.getElementById("myClick");
const myText = document.getElementById("myText");
myClick.addEventListener("click", () => {
    myText.textContent = "Hello World!";
    myText.style.color = "red";
    myText.classList.add("fst-italic");
});
myText.addEventListener("mouseover", () => {
    myText.textContent = "Asif Abir";
    myText.style.color = "inherit";
    myText.classList.remove("fst-italic");
});
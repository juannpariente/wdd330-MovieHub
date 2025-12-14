import { initHeaderFooter } from "./HeaderFooter.mjs";

initHeaderFooter();

const form = document.querySelector("#suggestForm");
const sendText = document.querySelector("#sendText");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendText.classList.add("on");

    setTimeout(() => {
        sendText.classList.remove("on");
    }, 3000);
});
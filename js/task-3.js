const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputName.addEventListener("input", event => {

    if (!inputName.value.trim()) {
        nameOutput.textContent = "Anonymous";
    } else { nameOutput.textContent = inputName.value };
});
const formSend = document.querySelector(".login-form");


formSend.addEventListener("submit", event => {
    event.preventDefault();

    const emailValue = event.target.elements.email.value.trim();
    const pasValue = event.target.elements.password.value.trim();

    let objResultInputForm = {};

    if (emailValue !== "" && pasValue !== "") {
        objResultInputForm.email = emailValue;
        objResultInputForm.password = pasValue;
    } else {
        alert("All form fields must be filled in");
        return
    };
    console.log(objResultInputForm);
    formSend.reset();
});


const formSend = document.querySelector(".login-form");


formSend.addEventListener("submit", event => {
    event.preventDefault();

    const emailValue = event.target.elements.email.value.trim();
    const pasValue = event.target.elements.password.value.trim();

    let objResultInputForm = {};

    if (emailValue === "" || pasValue === "") {
        alert("All form fields must be filled in")
    } else {
        objResultInputForm.email = emailValue;
        objResultInputForm.password = pasValue;
    };
    console.log(objResultInputForm);
    formSend.reset();
});


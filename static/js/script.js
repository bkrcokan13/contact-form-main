
// RadioButton
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.query-radio-btn');
    const radioButtonsContainer = document.querySelectorAll('.radio-button-container');

    radioButtonsContainer.forEach((container, containerIndex) => {
        container.addEventListener('click', () => {
            radioButtonsContainer.forEach(cont => {
                cont.style.backgroundColor = "";
            });

            container.style.backgroundColor = "var(--green-200)";
            radioButtons[containerIndex].checked = true;
        });
    });

 
});

document.addEventListener('DOMContentLoaded', () => {
    const firstNameField = document.getElementById("firstname-input");
    const lastNameField = document.getElementById("lastname-input");
    const emailField = document.getElementById("input-email-field");
    const radioButtons = document.querySelectorAll(".query-radio-btn");
    const radioButtonsContainer = document.querySelectorAll('.radio-button-container');

    const messageBoxField = document.getElementById("message-input");
    const checkBoxField = document.getElementById("approve-check-box");
    const submitButton = document.getElementById("submit-btn");

    const firstNameError = document.querySelector('.firstname-error');
    const lastNameError = document.querySelector('.lastname-error');
    const emailError = document.querySelector(".email-error");
    const radioButtonError = document.querySelector('.radio-button-error');
    const messageBoxError = document.querySelector('.message-box-error');
    const checkBoxError = document.querySelector('.checkbox-error');
    //field-error

    const inputTextFieldClass = document.querySelectorAll(".input-text-field");
    const messageFieldClass = document.querySelector(".message-field-box");

    submitButton.addEventListener('click', () => {
        let isValid = true;

        if (checkEmptyBox(firstNameField.value)) {
            firstNameError.style.display = "unset";
            inputTextFieldClass[0].classList.add("field-error");
            isValid = false;
        } else {
            firstNameError.style.display = "none";
            if(inputTextFieldClass[0].classList.contains("field-error")) {
                inputTextFieldClass[0].classList.remove("field-error");
            }
        }

        if (checkEmptyBox(lastNameField.value)) {
            lastNameError.style.display = "unset";
            inputTextFieldClass[1].classList.add("field-error");
            isValid = false;
        } else {
            lastNameError.style.display = "none";
            if(inputTextFieldClass[1].classList.contains("field-error")) {
                inputTextFieldClass[1].classList.remove("field-error");
            }
        }

        if (!checkEmail(emailField.value)) {
            emailError.style.display = "unset";
            inputTextFieldClass[2].classList.add("field-error");

            isValid = false;
        } else {
            emailError.style.display = "none";

            if(inputTextFieldClass[2].classList.contains("field-error")) {
                inputTextFieldClass[2].classList.remove("field-error");
            }
        }

        if (checkRadioButtonsSelected()) {
            radioButtonError.style.display = "unset";
            isValid = false;
        } else {
            radioButtonError.style.display = "none";
        }

        if (checkEmptyBox(messageBoxField.value)) {
            messageBoxError.style.display = "unset";
            isValid = false;

            messageFieldClass.classList.add("field-error");
        } else {
            messageBoxError.style.display = "none";
            if(messageFieldClass.classList.contains("field-error")) {
                messageFieldClass.classList.remove("field-error");
            }
        }

        if (!checkBoxField.checked) {
            checkBoxError.style.display = "unset";
            isValid = false;
        } else {
            checkBoxError.style.display = "none";
        }

        if (isValid) {
            alert("Message send ! :)")
            clearAllInputs();
        }
    });

    function checkEmptyBox(text) {
        return text === "";
    }

    function clearAllInputs() {
        firstNameField.value = "";
        lastNameField.value = "";    
        emailField.value = "";       
        messageBoxField.value = "";  
        checkBoxField.checked = false; 

        // Radio butonları sıfırlama
        radioButtons.forEach((radio) => {
            radio.checked = false;
            
        });
        

        radioButtonsContainer.forEach(cont => {
            cont.style.backgroundColor = "";
        });

    }

    function checkEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function checkRadioButtonsSelected() {
        return !Array.from(radioButtons).some(radio => radio.checked);
    }
});
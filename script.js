  var emailField = document.getElementById("email-field");
        var emailLabel = document.getElementById("email-label");
        var emailError = document.getElementById("email-error");

        function validateEmail() {
            emailLabel.style.bottom = "45px";

            if (!emailField.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                emailError.innerHTML = "Please enter a valid email address";
                emailField.style.borderColor = "red";
                emailError.style.top = '120%';
                return false;
            }
            
            emailError.innerHTML = "";
            emailError.style.top = '100px';
            emailField.style.borderColor = "green";
            return true;
        }
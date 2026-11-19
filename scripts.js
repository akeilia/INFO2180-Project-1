/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter form");
    var emailInput = document.getElementById("email");
    var message = document.querySelector(".message");

    // Let our own message handle invalid input instead of the browser's pop-up
    form.noValidate = true;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = emailInput.value.trim();
        var looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!looksValid) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent =
            "Thank you! Your email address " + email + " has been added to our mailing list!";
        form.reset();
    });
});

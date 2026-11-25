
// Reusable Toast Notification Function

function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;
    toast.className = "toast";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Book Now Button Functionality

document.querySelectorAll('a[href="#booking"]').forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        const bookingForm = document.getElementById("booking");

        if (bookingForm) {
            bookingForm.scrollIntoView({
                behavior: "smooth"
            });

            showToast("Please complete your ticket booking!");
        }
    });
});

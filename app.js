
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

// Activity 7 - Live Booking Summary

const matchSelect = document.getElementById("match");
const categorySelect = document.getElementById("category");
const ticketInput = document.getElementById("tickets");

const prices = {
    General: 1500,
    Premium: 3000,
    VIP: 5000
};

function updateSummary() {
    const match = matchSelect.value;
    const category = categorySelect.value;
    const tickets = Number(ticketInput.value) || 0;

    const total = (prices[category] || 0) * tickets;

    document.getElementById("summaryMatch").textContent =
        match || "Not selected";

    document.getElementById("summaryCategory").textContent =
        category || "Not selected";

    document.getElementById("summaryTickets").textContent =
        tickets;

    document.getElementById("summaryTotal").textContent =
        total.toLocaleString("en-IN");

    showToast("Booking summary updated!");
}

// Listen for user selections

matchSelect.addEventListener("change", updateSummary);
categorySelect.addEventListener("change", updateSummary);
ticketInput.addEventListener("input", updateSummary);


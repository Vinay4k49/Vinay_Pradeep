/* Name: Vinay Pradeep George
Student ID: 15020746 */

document.addEventListener("DOMContentLoaded", function () {
    
    // --- PART 1: HAMBURGER MENU LOGIC ---
    var hamburger = document.getElementById('hamburger-btn');
    var navList = document.getElementById('nav-list');

    // Check if elements exist
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    // --- PART 2: BOOKING FORM LOGIC ---
    var form = document.getElementById("bookingForm");
    var confirmBox = document.getElementById("confirmMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            
            // Stop page refresh
            event.preventDefault();

            // Validation Variables
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var date = document.getElementById('date').value;
            var phone = document.getElementById('phone').value;
            var phoneRule = /^[0-9\s]+$/;

            // Check Empty Fields
            if (name === "" || email === "" || date === "") {
                alert("Please fill in all required fields.");
                return;
            }

            // Check Phone Number
            if (phone !== "") {
                if (!phoneRule.test(phone)) {
                    alert("Error: Phone number can only contain numbers (0-9).");
                    return;
                }
            }

            // SUCCESS: Show Green Box
            if (confirmBox) {
                confirmBox.style.display = "block";
                confirmBox.scrollIntoView({ behavior: "smooth" });
            } else {
                alert("Your booking request has been recorded!");
            }

            form.reset();
        });
        
        console.log("Scripts loaded successfully.");
    }
});

/* --- HAMBURGER MENU FUNCTION --- */
function toggleMenu() {
    var navList = document.getElementById("nav-list");
    
    if (navList) {
        // This adds or removes the class "active"
        navList.classList.toggle("active");
    } else {
        // If this alert pops up, your HTML ID is wrong
        alert("Error: Could not find element with id 'nav-list'");
    }
}
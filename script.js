document.addEventListener('DOMContentLoaded', function() {
    // Set the target date for the countdown (7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    // Function to update countdown
    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        // Calculate days, hours, minutes, seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update the HTML with new values
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Initial call to update countdown
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to the registration form section
    function scrollToForm() {
        const formSection = document.getElementById('registrationForm');
        formSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Add event listener to the "Register Now" button
    const registerButton = document.querySelector('.register-now-button');
    registerButton.addEventListener('click', scrollToForm);
});

document.addEventListener('DOMContentLoaded', function() {
    // Set the target date for the bottom countdown (10 days from now)
    const bottomTargetDate = new Date();
    bottomTargetDate.setDate(bottomTargetDate.getDate() + 10);

    // Function to update bottom countdown
    function updateBottomCountdown() {
        const now = new Date();
        const timeDifference = bottomTargetDate - now;

        // Calculate days, hours, minutes, seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update the HTML with new values for bottom countdown
        document.getElementById('bottomDays').textContent = days.toString().padStart(2, '0');
        document.getElementById('bottomHours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('bottomMinutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('bottomSeconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Initial call to update bottom countdown
    updateBottomCountdown();

    // Update bottom countdown every second
    setInterval(updateBottomCountdown, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to update current date and time display every second
    function updateDateTime() {
        const now = new Date();
        
        // Format date as "21st June 2024"
        const day = now.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const month = monthNames[now.getMonth()];
        const year = now.getFullYear();

        // Function to determine suffix for day (e.g., 1st, 2nd, 3rd, 4th)
        const suffix = (day) => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };

        // Construct formatted date string
        const formattedDate = `${day}${suffix(day)} ${month} ${year}`;
        document.getElementById('current-date').innerText = formattedDate;

        // Format time in 12-hour format with AM/PM
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;
        document.getElementById('current-time').innerText = `@ ${formattedTime} (AST)`;
    }

    // Initial call to update date and time
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);
});

// Form submission handling for registration form
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const form = event.target;
    if (!form.checkValidity()) {
        event.preventDefault(); // Prevent default form submission if not valid
        event.stopPropagation();
        form.classList.add('was-validated'); // Add Bootstrap's validation styles
    } else {
        event.preventDefault(); // Prevent default form submission
        form.classList.remove('was-validated'); // Remove validation styles
        form.reset(); // Reset form fields
        alert('Registration successful!'); // Show confirmation message
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap modals
    let contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    let successModal = new bootstrap.Modal(document.getElementById('successModal'));
  
    // Handle click events for Contact Us button
    document.getElementById('contactUsBtn').addEventListener('click', function (e) {
      e.preventDefault();
      contactModal.show();
    });
  
    // Handle click events for Click Here button
    document.querySelector('.click-here-button').addEventListener('click', function (e) {
      e.preventDefault();
      contactModal.show();
    });
  
    // Handle form submission
    document.getElementById('submitContactForm').addEventListener('click', function () {
      if (document.getElementById('contactForm').checkValidity()) {
        let contactName = document.getElementById('contactName').value;
        let contactEmail = document.getElementById('contactEmail').value;
        let contactMessage = document.getElementById('contactMessage').value;

        successModal.show();
        contactModal.hide();
        document.getElementById('contactForm').reset();
      } else {
        // If form is invalid, add Bootstrap's is-invalid class to inputs to trigger HTML5 validation UI
        document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function (element) {
          if (!element.checkValidity()) {
            element.classList.add('is-invalid');
          }
        });
      }
    });
  
    // Clear is-invalid class on input/textarea when user starts typing again
    document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function (element) {
      element.addEventListener('input', function () {
        if (this.checkValidity()) {
          this.classList.remove('is-invalid');
        } else {
          this.classList.add('is-invalid');
        }
      });
    });
});

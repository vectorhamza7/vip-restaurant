 
   // main.js

// Mobile menu toggle
var menuToggle = document.getElementById('menuToggle');
var menuClose = document.getElementById('menuClose');
var mobileMenu = document.getElementById('mobileMenu');
var mobileLinks = document.querySelectorAll('.mobile-link');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.add('active');
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
    });
}

mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
    });
});

    
    // ---- Contact Form ----
    var contactForm = document.getElementById('contactForm');
    var toast = document.getElementById('toast');
    var toastMsg = document.getElementById('toastMsg');
    var toastIcon = toast.querySelector('[data-lucide]');

    function showToast(message, isError) {
        toastMsg.textContent = message;
        toastIcon.style.color = isError ? '#f87171' : '#4ade80';
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 2000);
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var btn = this.querySelector('.form-submit');
        var originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(function() {
            showToast('Reservation request sent successfully!');
            contactForm.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Stop page from refreshing

        const data = new FormData(contactForm);
        
        // Send the data to Formspree via Fetch
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Show your Toast
            toast.classList.add('show');
            contactForm.reset(); // Clear the form

            // Hide Toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    });
}

  
    // ---- AR buttons ----
    document.querySelectorAll('.menu-card-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var card = this.closest('.menu-card');
            var name = card.querySelector('.menu-card-name').textContent;
            showToast('AR view for "' + name + '" — coming soon!', true);
        });
    });
    // ---- Info Window ----
    const infoIcons = document.querySelectorAll('.menu-card-details-icon');
    const closeBtns = document.querySelectorAll('.close-info-window');

    // Handle Opening the Window
    infoIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents click from bubbling up
            
            // Find the specific card this icon belongs to
            const card = icon.closest('.menu-card');
            const infoWindow = card.querySelector('.info-window');
            
            if (infoWindow) {
                infoWindow.classList.add('show');
            }
        });
    });

    // Handle Closing the Window
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Find the specific card this close button belongs to
            const card = btn.closest('.menu-card');
            const infoWindow = card.querySelector('.info-window');
            
            if (infoWindow) {
                infoWindow.classList.remove('show');
            }
        });
    });

    // Optional: Close window if user clicks anywhere outside of it
    document.addEventListener('click', (e) => {
        const activeWindow = document.querySelector('.info-window.show');
        if (activeWindow && !activeWindow.contains(e.target)) {
            activeWindow.classList.remove('show');
        }
    });
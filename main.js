 
    // ---- Mobile Menu ----
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

    // ---- Nav backdrop on scroll ----
    var navWrapper = document.querySelector('.nav-wrapper');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navWrapper.style.backdropFilter = 'blur(16px)';
            navWrapper.style.webkitBackdropFilter = 'blur(16px)';
        } else {
            navWrapper.style.backdropFilter = 'none';
            navWrapper.style.webkitBackdropFilter = 'none';
        }
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
        }, 3500);
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

    // ---- Smooth scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- AR buttons ----
    document.querySelectorAll('.menu-card-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var card = this.closest('.menu-card');
            var name = card.querySelector('.menu-card-name').textContent;
            showToast('AR view for "' + name + '" — coming soon!', true);
        });
    });
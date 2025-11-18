// Burger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.header__nav .btn__icon');
    const closeButton = document.querySelector('.mobile__container .btn__icon');
    const mobileContainer = document.querySelector('.mobile__container');

    // Function to open menu
    function openMenu() {
        if (mobileContainer) {
            mobileContainer.classList.add('active');
        }
    }

    // Function to close menu with animation
    function closeMenu() {
        if (mobileContainer) {
            mobileContainer.classList.remove('active');
        }
    }

    // Open menu on burger button click
    if (burgerButton && mobileContainer) {
        burgerButton.addEventListener('click', function(e) {
            e.stopPropagation();
            openMenu();
        });
    }

    // Close menu on close button click
    if (closeButton && mobileContainer) {
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
    }

    // Close menu on click outside
    document.addEventListener('click', function(e) {
        if (mobileContainer && mobileContainer.classList.contains('active')) {
            // Check if click is outside the mobile container
            if (!mobileContainer.contains(e.target) && !burgerButton.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Prevent closing when clicking inside the menu
    if (mobileContainer) {
        mobileContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});


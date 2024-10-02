const loginForm = document.getElementById('login-form');
const purchaseSection = document.getElementById('purchase-section');
const downloadSection = document.getElementById('download-section');
const buyButton = document.getElementById('buy-button');
const downloadLink = document.getElementById('download-link');
const userIcon = document.getElementById('user-icon');

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

let isLoggedIn = false; // Track the login state
let hasPurchased = false; // Track purchase state

// Event listener for tab buttons
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.getAttribute('data-tab') === tabName) {
                content.classList.add('active');
            }
        });
    });
});

// Login form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a successful login
    if (username && password) {
        isLoggedIn = true; // Set login state to true
        purchaseSection.classList.add('active');
        loginForm.classList.remove('active');

        // Show purchase tab
        document.querySelector('.tab-button[data-tab="purchase"]').click();
    }
});

// Purchase button click
buyButton.addEventListener('click', function () {
    hasPurchased = true; // Set purchase state to true
    purchaseSection.classList.remove('active');
    downloadSection.classList.add('active');
    downloadLink.href = ''; // Change this to your game file

    // Show the download tab
    const downloadTabButton = document.querySelector('.tab-button[data-tab="download"]');
    downloadTabButton.classList.remove('hidden');
    downloadTabButton.click();
});

// Hide the download tab if not purchased
if (!hasPurchased) {
    downloadSection.classList.remove('active');
    const downloadTabButton = document.querySelector('.tab-button[data-tab="download"]');
    downloadTabButton.classList.add('hidden');
}

// User account icon click (optional functionality)
userIcon.addEventListener('click', () => {
    if (isLoggedIn) {
        alert("User is logged in");
    } else {
        alert("Please log in to access your account");
    }
});

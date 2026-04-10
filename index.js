function renderServices() {
    const services = ["Fresh Beans", "Fast Delivery", "Cozy Workspace", "Free Wi-Fi"];
    const container = document.getElementById('services-list');
    
    for (let i = 0; i < services.length; i++) {
        const div = document.createElement('div');
        div.className = 'service-card';
        div.innerText = services[i];
        container.appendChild(div);
    }
}

//  Form Validation
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('form-feedback');

    if (name.length < 3 || !email.includes('@')) {
        feedback.innerText = "Please enter a valid name and email.";
        feedback.style.color = "red";
    } else {
        feedback.innerText = `Thank you, ${name}! We'll contact you soon.`;
        feedback.style.color = "green";
    }
}

const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Conditional for icon change
    themeBtn.innerText = document.body.classList.contains('dark-theme') ? "☀️" : "🌙";
});

// Initializing
renderServices();
document.getElementById('contact-form').addEventListener('submit', validateForm);
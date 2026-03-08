// Chatbot functionality
function ask() {
    let input = document.getElementById("question");
    let chat = document.getElementById("chat");

    let q = input.value.toLowerCase().trim();

    if (q === "") return;

    // Add user message
    chat.innerHTML += "<br><b>You:</b> " + input.value;

    let reply = "Please contact the clinic for detailed consultation.";

    // Simple keyword-based responses
    if (q.includes("acne")) {
        reply = "Acne treatments usually take 4-6 sessions depending on your skin condition. We offer advanced solutions including chemical peels and laser therapy.";
    } else if (q.includes("laser")) {
        reply = "Laser hair removal typically requires 6 sessions for best results. We use advanced technology for permanent hair reduction.";
    } else if (q.includes("pigmentation")) {
        reply = "Pigmentation treatments include chemical peels, laser therapy, and topical medications to remove dark spots and even out skin tone.";
    } else if (q.includes("hair")) {
        reply = "Hair loss treatments include PRP therapy, medical treatments, and scalp care routines for healthy hair growth.";
    } else if (q.includes("appointment") || q.includes("book")) {
        reply = "You can book an appointment by filling out the contact form above or calling us at 6360513214.";
    } else if (q.includes("cost") || q.includes("price")) {
        reply = "Treatment costs vary based on the procedure. Please contact us for a personalized consultation and pricing.";
    }

    // Add bot response
    chat.innerHTML += "<br><b>Assistant:</b> " + reply + "<br>";

    // Clear input
    input.value = "";

    // Scroll to bottom
    chat.scrollTop = chat.scrollHeight;
}

// Add enter key support for chatbot
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('question');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                ask();
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to sections
document.querySelectorAll('.section, .card, .testimonial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

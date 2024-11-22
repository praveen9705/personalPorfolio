const themeToggle = document.querySelector('.theme-toggle i');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.classList.toggle('fa-sun');
    themeToggle.classList.toggle('fa-moon');
});
// Function to handle scrolling animation
function revealOnScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (itemPosition < viewportHeight * 0.9) {
            item.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initial call to make sure items visible on load are animated
revealOnScroll();
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = 'Proficiency details or description here';
        item.appendChild(tooltip);
    });
    item.addEventListener('mouseleave', () => {
        const tooltip = item.querySelector('.tooltip');
        if (tooltip) item.removeChild(tooltip);
    });
});


    function submitForm(event) {
        event.preventDefault(); // Prevent actual form submission

        // Show a simple message notification
        alert("Message sent!");

        // Optional: Clear the form fields after "sending"
        document.getElementById("contact-form").reset();
    }


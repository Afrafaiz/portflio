var typed = new Typed(".text", {
    strings: ["Web Developer", "Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// JavaScript to toggle additional details for each service
document.querySelectorAll('.read').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        const paragraph = button.previousElementSibling; // Select the paragraph before the button
        const isExpanded = paragraph.classList.toggle('expanded');

        if (isExpanded) {
            button.textContent = 'Show Less'; // Update button text
        } else {
            button.textContent = 'Learn More';
        }
    });
});

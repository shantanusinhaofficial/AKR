document.getElementById('contactForm').addEventListener('submit', function(event) {
    // event.preventDefault(); // Remove this line to allow form submission
    alert('Contact form submitted');
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // event.preventDefault(); // Remove this line to allow form submission
    alert('Feedback form submitted');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const obj = Object.fromEntries(fd);
    console.log(obj);

    const json = JSON.stringify(obj);
    localStorage.setItem('contactForm', json);

    window.location.href = "test.html"
});

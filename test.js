document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();
    // Here you can add code to handle form submission, such as sending the data to a server
    alert("Feedback submitted successfully!");
});
// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


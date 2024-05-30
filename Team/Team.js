function showText(id) {
    const textElement = document.getElementById(id);
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}


// const btn = document.getElementsByClassName('contact-button')
// const paragraph = document.getElementsByClassName('hidden-para')

// btn.addEventListener('click',() => {
//     paragraph.textContent = "Your email id"
// })
// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Add event listener when user scrolls
window.addEventListener("scroll", reveal);

// Trigger once on load
reveal();

// Simple Typewriter Effect (Optional)
const textElement = document.getElementById('typewriter');
const text = "Web Developer | Creator | Learner";
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// Uncomment the line below to start typing effect
// type();

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select your name element from the Hero section
    const nameTitle = document.querySelector('.dynamic-title');
    
    if (nameTitle) {
        // Add hover effect via JavaScript
        nameTitle.addEventListener('mouseenter', () => {
            nameTitle.style.color = '#38bdf8'; // Accent Blue
        });
        
        nameTitle.addEventListener('mouseleave', () => {
            nameTitle.style.color = '#f8fafc'; // Back to main white
        });
    }

    console.log("Pratham Dada's Portfolio JS Loaded Successfully.");
});

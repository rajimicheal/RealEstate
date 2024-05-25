document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        "Affordable Houses For Rent",
        "Cheapest House Prices",
        "800+ Houses to View From",
        "Best Houses all over the Continent",
        "Quality Houses is Our Name"
    ];
    let index = 0;
    let currentIndex = -1; // Initialize currentIndex to -1 to ensure the first text is always displayed

    function changeText() {
        const animatedTextElement = document.getElementById('animatedText');
        // Choose a random index that is different from the current one
        do {
            index = Math.floor(Math.random() * texts.length);
        } while (index === currentIndex);
        currentIndex = index;
        // Update text content immediately
        animatedTextElement.textContent = texts[index];
    }

    // Change text immediately
    changeText();

    // Change text every 10 seconds (10000 milliseconds) before animation
    setInterval(changeText, 10000);
});

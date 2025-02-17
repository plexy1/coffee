document.addEventListener('DOMContentLoaded', () => {
    const waterAmountInput = document.getElementById('water-amount');
    const calculateButton = document.getElementById('calculate-button');
    const coffeeOutputDiv = document.getElementById('coffee-output');

    calculateButton.addEventListener('click', () => {
        const waterAmount = parseFloat(waterAmountInput.value);

        if (isNaN(waterAmount) || waterAmount <= 0) {
            coffeeOutputDiv.textContent = "Please enter a valid water amount.";
            return;
        }

        // --- Coffee to Water Ratio ---
        //  Common ratios are 1:15, 1:16, 1:17 (coffee:water by weight)
        //  Let's use 1:16 as an example (grams of coffee per ml of water)
        const coffeeRatio = 1 / 16; // 1 gram coffee for 16 ml water
        const coffeeAmountGrams = waterAmount * coffeeRatio;

        // Display the result (you might want to round it)
        coffeeOutputDiv.textContent = `${coffeeAmountGrams.toFixed(1)} grams of coffee`;

        // --- Trigger Animation (Placeholder - We'll enhance this) ---
        animateCup(); // Example function to start cup animation
        animateBeans(); // Example function to start bean animation
    });

    // --- Animation Functions (Placeholders - Need to implement actual animation) ---
    function animateCup() {
        console.log("Cup animation triggered!");
        //  Here you'd add CSS classes or JavaScript animation to the cup element
        //  For example, adding a class that starts a CSS animation
    }

    function animateBeans() {
        console.log("Bean animation triggered!");
        //  Similarly for bean animation
    }
});
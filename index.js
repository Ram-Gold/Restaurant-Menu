const incrementButtons = document.querySelectorAll('.incrementButton');
const decrementButtons = document.querySelectorAll('.decrementButton');

incrementButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.currentTarget.closest('.card-items');
        const counterDisplay = card.querySelector('.quantity-value');
        let count = parseInt(counterDisplay.textContent);
        count++;
        counterDisplay.textContent = count;
    });
});

decrementButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.currentTarget.closest('.card-items');
        const counterDisplay = card.querySelector('.quantity-value');
        let count = parseInt(counterDisplay.textContent);
        if (count > 0) {
            count--;
            counterDisplay.textContent = count;
        }
    });
});
const wheel = document.getElementById('wheel');
const numberDisplay = document.getElementById('number');
const spinButton = document.getElementById('spin-button');

spinButton.addEventListener('click', () => {
    const startNumber = parseInt(prompt('Enter the start number:'));
    const endNumber = parseInt(prompt('Enter the end number:'));

    if (isNaN(startNumber) || isNaN(endNumber)) {
        alert('Please enter valid numbers.');
        return;
    }

    const randomAngle = Math.random() * 360;
    const rotation = 1800 + randomAngle; // Rotate at least 5 full circles plus the random angle

    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        const randomValue = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
        numberDisplay.textContent = randomValue;
        wheel.style.transition = 'none'; // Remove transition for zoom effect
        wheel.style.transform = `rotate(${rotation}deg) scale(1.5)`;
    }, 3000);
});

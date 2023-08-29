const wheel = document.getElementById('wheel');
const numberDisplay = document.getElementById('number');
const numberList = document.querySelectorAll('.number-list li');
const spinButton = document.getElementById('spin-button');

let spinning = false;

spinButton.addEventListener('click', () => {
    if (spinning) return; // Prevent multiple spins

    const startAngle = 0;
    const endAngle = 360 * (numberList.length - 1);
    const randomAngle = Math.random() * (endAngle - startAngle) + startAngle;

    const rotation = 1800 + randomAngle; // Rotate at least 5 full circles plus the random angle

    spinning = true;
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        const selectedIndex = Math.floor(randomAngle / (360 / numberList.length));
        const selectedNumber = numberList[selectedIndex].textContent;
        numberDisplay.textContent = selectedNumber;
        wheel.style.transition = 'transform 2s ease-out';
        const correctedRotation = rotation + (360 / numberList.length / 2);
        wheel.style.transform = `rotate(${correctedRotation}deg) scale(1.5)`;
        setTimeout(() => {
            wheel.style.transition = 'transform 1s ease-out';
            wheel.style.transform = `rotate(${correctedRotation}deg) scale(1)`;
            spinning = false;
        }, 2000);
    }, 5000);
});

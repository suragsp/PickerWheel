const wheel = document.getElementById('wheel');
const numberDisplay = document.getElementById('number');
const spinButton = document.getElementById('spin-button');
const chancesDisplay = document.getElementById('chances');
const numberList = document.querySelector('.number-list');

let spinning = false;
let chancesLeft = 5;

chancesDisplay.textContent = `Chances left: ${chancesLeft}`;

spinButton.addEventListener('click', () => {
    if (spinning || chancesLeft === 0) return;

    const startNumberInput = parseInt(prompt("Enter start number:"));
    const endNumberInput = parseInt(prompt("Enter end number:"));

    if (isNaN(startNumberInput) || isNaN(endNumberInput) || startNumberInput >= endNumberInput) {
        alert('Please enter valid start and end numbers.');
        return;
    }

    const numSegments = endNumberInput - startNumberInput + 1;
    const anglePerSegment = 360 / numSegments;
    const randomSegmentIndex = Math.floor(Math.random() * numSegments);

    const rotation = 1800 + anglePerSegment * randomSegmentIndex;

    spinning = true;
    chancesLeft--;

    chancesDisplay.textContent = `Chances left: ${chancesLeft}`;

    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        spinning = false;

        wheel.style.transition = 'transform 3s ease-in-out';
        wheel.style.transform = `rotate(${rotation + anglePerSegment / 2}deg) scale(1.5)`;

        setTimeout(() => {
            const selectedNumber = startNumberInput + randomSegmentIndex;
            numberDisplay.textContent = selectedNumber;

            wheel.style.transition = 'transform 1s ease-in-out';
            wheel.style.transform = `rotate(${rotation + anglePerSegment / 2}deg) scale(1)`;
        }, 3000);
    }, 5000);
});

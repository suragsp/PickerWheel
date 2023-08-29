const wheel = document.getElementById('wheel');
const numberDisplay = document.getElementById('number');
const numberList = document.querySelectorAll('.number-list li');
const spinButton = document.getElementById('spin-button');
const chancesDisplay = document.getElementById('chances');

let spinning = false;
let chancesLeft = 5; // Set the initial number of chances

chancesDisplay.textContent = `Chances left: ${chancesLeft}`;

spinButton.addEventListener('click', () => {
    if (spinning || chancesLeft === 0) return; // Prevent spins when already spinning or no chances left

    const startAngle = 0;
    const endAngle = 360 * (numberList.length - 1);
    const randomAngle = Math.random() * (endAngle - startAngle) + startAngle;

    const rotation = 1800 + randomAngle; // Rotate at least 5 full circles plus the random angle

    spinning = true;
    chancesLeft--;

    chancesDisplay.textContent = `Chances left: ${chancesLeft}`;

    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        spinning = false;

        // Find the closest selected segment
        const anglePerSegment = 360 / numberList.length;
        const targetSegmentIndex = Math.floor((randomAngle + anglePerSegment / 2) / anglePerSegment);
        const targetAngle = targetSegmentIndex * anglePerSegment;

        // Rotate to the exact selected angle
        wheel.style.transition = 'transform 3s ease-in-out';
        wheel.style.transform = `rotate(${rotation + targetAngle}deg) scale(1.5)`;

        // Display the selected number after the rotation animation
        setTimeout(() => {
            const selectedNumber = numberList[targetSegmentIndex].textContent;
            numberDisplay.textContent = selectedNumber;

            // Restore the wheel to its normal size
            wheel.style.transition = 'transform 1s ease-in-out';
            wheel.style.transform = `rotate(${rotation + targetAngle}deg) scale(1)`;
        }, 3000);
    }, 5000);
});

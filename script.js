const moodColors = {
    calm: '#9F9F00',
    grounded: '#2B4A00',
    anger: '#ED1C24',
    sadness: '#BE1E2D',
    excited: '#FF8500',
    peaceful: '#00A79D',
    confidence: '#343A82',
    happiness: '#2DE23E',
    love: '#FF4580',
    affection: '#FFBBD8',
    serenity: '#86D5E0',
    mystery: '#000F8E',
    nostalgia: '#873304',
    creativity: '#B4A0F9',
    joy: '#F9ED32',
    hope: '#FFD658',
    relaxation: '#FFFBB7',
    indifference: '#6D6E71',
    neutral: '#939598',
    fear: '#231F20',
    purity: '#FFFFFF',
    motivation: '#A5D500',
    guilt: '#FFA4A4',
    confusion: '#8E44AD',
    embarrassment: '#FF6347',
    boredom: '#BDBDBD',
};

// Set up the canvas
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Ensure canvas resizes with the window
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function animateLine(color, startX, startY, endX, endY) {
    let progress = 0; // Progress from 0 to 1

    function draw() {
        progress += 0.02; // Increment progress (adjust speed here)

        if (progress > 1) progress = 1; // Ensure progress doesn't exceed 1

        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress;

        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        if (progress < 1) {
            requestAnimationFrame(draw);
        }
    }

    draw();
}

// Function to draw a new line
function addColor(mood) {
    const color = moodColors[mood] || '#9e9e9e'; // Default to grey if mood is not in the list

    const isHorizontal = Math.random() > 0.5;

    if (isHorizontal) {
        // Horizontal line (90 degrees)
        const startX = 0;
        const startY = Math.random() * canvas.height; // Random vertical position
        const endX = canvas.width;
        const endY = startY;
        animateLine(color, startX, startY, endX, endY);
    } else {
        // Vertical line (180 degrees)
        const startX = Math.random() * canvas.width; // Random horizontal position
        const startY = 0;
        const endX = startX;
        const endY = canvas.height;
        animateLine(color, startX, startY, endX, endY);
    }
}

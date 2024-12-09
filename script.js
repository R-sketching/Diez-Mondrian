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

// Predefined line thickness options
const lineThicknesses = [2, 5, 10, 20, 40];

// Function to animate a line
function animateLine(color, startX, startY, endX, endY, lineWidth) {
    let progress = 0; // Progress from 0 to 1

    function draw() {
        progress += 0.02; // Increment progress (adjust speed here)

        // Calculate current position based on progress
        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress;

        // Draw the line
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth; // Use the selected line thickness
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        // Continue the animation if progress is less than 1
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

    // Randomly select a line thickness from the predefined options
    const randomThickness = lineThicknesses[Math.floor(Math.random() * lineThicknesses.length)];

    if (isHorizontal) {
        // Horizontal line
        const startX = 0;
        const startY = Math.random() * canvas.height; // Random vertical position
        const endX = canvas.width;
        const endY = startY;
        animateLine(color, startX, startY, endX, endY, randomThickness);
    } else {
        // Vertical line
        const startX = Math.random() * canvas.width; // Random horizontal position
        const startY = 0;
        const endX = startX;
        const endY = canvas.height;
        animateLine(color, startX, startY, endX, endY, randomThickness);
    }
}

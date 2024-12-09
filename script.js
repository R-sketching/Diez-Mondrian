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

// Function to draw a line on the canvas
function addColor(mood) {
    const color = moodColors[mood] || '#9e9e9e'; // Default to grey if mood is not in the list

    // Generate random start and end points
    const startX = Math.random() * canvas.width;
    const startY = Math.random() * canvas.height;
    const endX = Math.random() > 0.5 ? startX : Math.random() * canvas.width;
    const endY = Math.random() > 0.5 ? startY : Math.random() * canvas.height;

    // Draw the line
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

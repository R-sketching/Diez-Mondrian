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

let colors = [];

function addColor(mood) {
    const color = moodColors[mood] || '#9e9e9e'; // Default to grey if mood is not in the list
    colors.push(color);

    const interactiveArea = document.getElementById('interactive-area');
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.backgroundColor = color;

    // Set random position for the line
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;

    line.style.top = `${randomTop}%`;
    line.style.left = `${randomLeft}%`;

    // Randomly choose horizontal or vertical direction for the line
    const randomDirection = Math.random() > 0.5 ? 'horizontal' : 'vertical';
    if (randomDirection === 'horizontal') {
        line.style.width = '100vw';
        line.style.height = '5px';
        line.style.animation = 'lineMovement 3s linear forwards';
    } else {
        line.style.width = '5px';
        line.style.height = '100vh';
        line.style.animation = 'verticalLineMovement 3s linear forwards';
    }

    interactiveArea.appendChild(line);
}

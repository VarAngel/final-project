document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.getElementById('sakura-rain');
    if (!rainContainer) return;

    const petals = ['🌸', '💮'];

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'register-sakura-petal';
        petal.innerText = petals[Math.floor(Math.random() * petals.length)];
        
        const randomX = Math.random() * 98;
        petal.style.left = `${randomX}%`;
        
        const randomDelay = Math.random() * 0.4;
        petal.style.animationDelay = `${randomDelay}s`;
        
        const randomDuration = 4 + Math.random() * 4;
        petal.style.animationDuration = `${randomDuration}s`;
        
        const randomSize = 12 + Math.random() * 12;
        petal.style.fontSize = `${randomSize}px`;

        rainContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, (randomDelay + randomDuration) * 1000);
    }

    setInterval(createPetal, 300);
});

/* факт */
document.addEventListener("DOMContentLoaded", () => {
    const japanFacts = [
        "В Японии насчитывается более 5 миллионов торговых автоматов (дзидоханбэйки). В них можно купить абсолютно всё: от горячего баночного кофе и свежих фруктов до зонтиков и тёплых супов.",
        "Привычные нам квадратные арбузы были придуманы фермерами на острове Сикоку. Их выращивают в специальных стеклянных кубах исключительно ради удобства хранения в компактных японских холодильниках.",
        "В японских поездах Синкансэн работает специальная команда уборщиков «7-минутное чудо». Всего за 7 минут стоянки поезда они умудряются идеально вычистить, продезинфицировать и развернуть все кресла по ходу движения.",
        "В Японии чёрные кошки считаются символом большой удачи и процветания. Местные жители верят, что такая кошка способна отпугнуть злых духов и привлечь благородных ухажёров.",
        "Остров Окуносима полностью заселён дикими, но невероятно дружелюбными кроликами. В годы *** здесь была секретная лаборатория, а теперь это мирный туристический рай."
    ];

    const factElement = document.getElementById("random-fact-text");
    let currentIdx = Math.floor(Math.random() * japanFacts.length);

    function changeFactWithAnimation() {
        if (!factElement) return;

        factElement.classList.remove("fade-in");
        factElement.classList.add("fade-out");

        setTimeout(() => {
            let nextIdx;
            do {
                nextIdx = Math.floor(Math.random() * japanFacts.length);
            } while (nextIdx === currentIdx);
            
            currentIdx = nextIdx;
            factElement.textContent = japanFacts[currentIdx];

            factElement.classList.remove("fade-out");
            factElement.classList.add("fade-in");
        }, 400);
    }

    if (factElement) {
        factElement.textContent = japanFacts[currentIdx];
        factElement.classList.add("fade-in");
        setInterval(changeFactWithAnimation, 12000);
    }

/* время */
    function updateTokyoTime() {
        const timeElement = document.getElementById('tokyo-time');
        if (!timeElement) return;
        
        const options = { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const formatter = new Intl.DateTimeFormat('ru-RU', options);
        timeElement.innerText = formatter.format(new Date());
    }
    
    updateTokyoTime();
    setInterval(updateTokyoTime, 1000);


/* погода */
    async function getTokyoWeather() {
        const tempElement = document.getElementById('weather-temp');
        const descElement = document.getElementById('weather-desc');
        const iconElement = document.getElementById('weather-icon');
        
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,weather_code');
            const data = await response.json();
            
            if (data && data.current && tempElement && descElement && iconElement) {
                const temp = Math.round(data.current.temperature_2m);
                const code = data.current.weather_code;
                
                tempElement.innerText = `${temp > 0 ? '+' : ''}${temp}°C`;
                
                let icon = '🌸';
                let desc = 'Прекрасный день в Токио';
                
                if (code === 0) { icon = '☀️'; desc = 'Ясно, идеальное время для прогулок'; }
                else if (code >= 1 && code <= 3) { icon = '⛅'; desc = 'Переменная облачность'; }
                else if (code >= 45 && code <= 48) { icon = '🌫️'; desc = 'Туманно и загадочно'; }
                else if (code >= 51 && code <= 67) { icon = '🌧️'; desc = 'Идет дождь, возьмите прозрачный зонт'; }
                else if (code >= 71 && code <= 77) { icon = '❄️'; desc = 'Идет снег, Токио сказочно красив'; }
                else if (code >= 80) { icon = '⛈️'; desc = 'Ливень или гроза'; }
                
                iconElement.innerText = icon;
                descElement.innerText = `Погода: ${desc}`;
            }
        } catch (error) {
            if (tempElement) tempElement.innerText = '+18°C';
            if (descElement) descElement.innerText = 'Сезон: Цветение Сакуры (Ханами)';
        }
    }
    getTokyoWeather();

/* посхалка */
    const catTrigger = document.getElementById('lucky-cat-trigger');
    const rainContainer = document.getElementById('global-coin-rain');

    if (catTrigger && rainContainer) {
        catTrigger.addEventListener('click', function() {
            catTrigger.classList.add('cat-flash');
            setTimeout(() => catTrigger.classList.remove('cat-flash'), 500);

            const coinCount = 25; 

            for (let i = 0; i < coinCount; i++) {
                const coin = document.createElement('div');
                coin.className = 'rain-coin';
                coin.innerText = '🪙';
                
                const randomX = Math.random() * 100;
                coin.style.left = `${randomX}%`;
                
                const randomDelay = Math.random() * 0.8;
                coin.style.animationDelay = `${randomDelay}s`;
                
                const randomDuration = 1.2 + Math.random() * 1.0;
                coin.style.animationDuration = `${randomDuration}s`;
                
                const randomSize = 14 + Math.random() * 12;
                coin.style.fontSize = `${randomSize}px`;

                rainContainer.appendChild(coin);

                setTimeout(() => {
                    coin.remove();
                }, (randomDelay + randomDuration) * 1000);
            }
        });
    }
});
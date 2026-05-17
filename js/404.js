document.addEventListener("DOMContentLoaded", () => {
    const variations = [
        {
            jap: "デジタル迷宮",
            title: "Маршрут потерян в неоновом тумане",
            text: "Похоже, провода Токио запутались, или неоновый указатель завел вас не туда. Эту цифровую локацию еще не нанесли на наши карты путеводителя."
        },
        {
            jap: "隠された道",
            title: "Вы нашли пустую чайную комнату",
            text: "Иногда, чтобы найти верный путь, нужно сначала заблудиться. Но здесь ничего нет, кроме дзен-тишины и кода ошибки. Давайте вернемся назад."
        },
        {
            jap: "行き止まり",
            title: "Сюда не ходят скоростные поезда",
            text: "Вы вышли на виртуальной станции, которой не существует. Дальше рельсы обрываются в бесконечной цифровой пустоте. Развернемся?"
        },
        {
            jap: "竹林の迷路",
            title: "Затерянные в бамбуковой роще",
            text: "Стебли бамбука Арасиямы сомкнулись за спиной, скрыв нужную тропинку. Сделайте глубокий вдох, очистите разум и попробуйте проложить маршрут заново."
        },
        {
            jap: "壊れた狐面",
            title: "Духи Кицунэ попутали след",
            text: "Хитрые лисы стерли координаты этой страницы из нашей базы данных, оставив лишь легкую дымку. Не поддавайтесь их уловкам, возвращайтесь на главную дорогу."
        },
        {
            jap: "祇園の夜",
            title: "Фонари пропали из виду",
            text: "В старых улочках Гиона легко свернуть не туда, когда гаснут бумажные фонарики. Ночной Кёто скрыл страницу, но мы всегда можем вернуться к началу пути."
        }
    ];

    const japSubtitle = document.querySelector(".jap-subtitle");
    const errorTitle = document.querySelector(".error-title");
    const errorText = document.querySelector(".error-text");

    const currentIdx = Math.floor(Math.random() * variations.length);
    const chosen = variations[currentIdx];

    if (japSubtitle && errorTitle && errorText) {
        japSubtitle.textContent = chosen.jap;
        errorTitle.textContent = chosen.title;
        errorText.textContent = chosen.text;
    }

    const errorContainer = document.querySelector('.error-container');
    if (!errorContainer) return;

    const petals = ['🌸', '💮'];

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        petal.innerText = petals[Math.floor(Math.random() * petals.length)];
        
        const randomX = Math.random() * 98;
        petal.style.left = `${randomX}%`;
        
        const randomDelay = Math.random() * 0.5;
        petal.style.animationDelay = `${randomDelay}s`;
        
        const randomDuration = 4 + Math.random() * 4;
        petal.style.animationDuration = `${randomDuration}s`;
        
        const randomSize = 12 + Math.random() * 12;
        petal.style.fontSize = `${randomSize}px`;

        errorContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, (randomDelay + randomDuration) * 1000);
    }

    setInterval(createPetal, 350);
});
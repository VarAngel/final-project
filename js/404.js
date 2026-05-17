document.addEventListener("DOMContentLoaded", () => {
    const variations = [
        {
            jap: "デジタル迷宮",
            title: "Маршрут потерян в неоновом тумане",
            text: "Похоже, провода Акихабары запутались, или неоновый указатель завел вас не туда. Эту цифровую локацию еще не нанесли на наши кибер-карты путеводителя."
        },
        {
            jap: "隠された道",
            title: "Вы нашли пустую чайную комнату",
            text: "Иногда, чтобы найти верный путь, нужно сначала заблудиться. Но здесь ничего нет, кроме дзен-тишины, аромата матча и кода ошибки. Давайте вернемся назад."
        },
        {
            jap: "行き止まり",
            title: "Сюда не ходят скоростные поезда",
            text: "Вы вышли на виртуальной станции-призраке, которой не существует. Дальше рельсы обрываются в бесконечной цифровой пустоте Синкансэна. Развернемся?"
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
        },
        {
            jap: "アニメの世界",
            title: "Страница улетела с меха-роботом",
            text: "Произошел сбой в системе Евангелиона! Пилот потерял синхронизацию, и нужная вам страница катапультировалась в неизвестном направлении. Инициализируем перезапуск."
        },
        {
            jap: "畳の部屋",
            title: "Кот украл ваш свиток с кодом",
            text: "Священный свиток, содержащий эту страницу, был наглейшим образом утащен пушистым котиком с поднятой лапкой. Он играет с ним где-то на татами."
        },
        {
            jap: "サイバーパンк",
            title: "Хакерская атака на Нео-Токио",
            text: "Синдикат Нетраннеров совершил набег на наши серверы и временно зашифровал этот адрес. Ваша кибер-дека не может пробить этот лед. Отступаем!"
        },
        {
            jap: "折り紙の鶴",
            title: "Слишком хрупкая реальность",
            text: "Эта страница была сложена из тончайшей бумаги оригами, но неосторожный клик рассыпал её на сотни бумажных журавликов. Они улетели в сторону Фудзи."
        },
        {
            jap: "ラーメンの湯気",
            title: "Страница растворилась в бульоне",
            text: "Шеф-повар так усердно готовил идеальный рамен, что пар от наваристого бульона полностью размыл текст на этой веб-странице. Подождем, пока остынет?"
        },
        {
            jap: "禅の庭",
            title: "Камень преткновения в саду",
            text: "Вы наткнулись на пятнадцатый камень в саду Рёандзи — тот самый, который невозможно увидеть. Страница ушла в глубокую медитацию о смысле бытия."
        },

        {
            jap: "関所の試練",
            title: "Вы наткнулись на заставу сёгуна",
            text: "Строгие самураи на пограничном пункте проверяют ваши подорожные свитки. Обнажать катану бессмысленно — подождите, пока стража проверит печати и поднимет шлагбаум."
        },
        {
            jap: "富士山の霧",
            title: "Фудзи скрылась в плотном тумане",
            text: "Священная гора полностью заволоклась густыми облаками. Идти вперед по горной тропе сейчас смертельно опасно. Переведите дух и подождите, пока ветер разгонит туман."
        },
        {
            jap: "大名行列",
            title: "Дорогу перегородила процессия даймё",
            text: "По главному тракту движется пышная свитка великого князя. По законам чести, простые путники обязаны склонить голову и смиренно ждать, пока процессия не скроется за горизонтом."
        },
        {
            jap: "茶道の礼儀",
            title: "Строгий ритуал чайного мастера",
            text: "Мастер Тяною только начал протирать шелковую салфетку чаван. Уйти посреди чайной церемонии — несмываемый позор. Дождитесь, пока вам вежливо подадут пиалу, и путь откроется."
        },
        {
            jap: "鳥居の結界",
            title: "Вы пересекли древний барьер тории",
            text: "Эти алые ворота ведут в обитель древних ками. Пространство вокруг закольцевалось, став невидимой клеткой. Выразите почтение духам, подождите завершения обряда, и узы спадут."
        }
    ];

    const japSubtitle = document.querySelector(".jap-subtitle");
    const errorTitle = document.querySelector(".error-title");
    const errorText = document.querySelector(".error-text");
    const container = document.querySelector(".error-content");
    const shuffleBtn = document.getElementById("shuffle-btn");
    const stepCountElement = document.getElementById("step-count");
    const homeBtn = document.querySelector(".error-home-btn");

    let currentIdx = Math.floor(Math.random() * variations.length);
    let steps = 1;
    let timerInterval = null;

    function startLockdown() {
        if (!homeBtn) return;

        homeBtn.classList.add("btn-disabled");
        homeBtn.style.pointerEvents = "none";
        
        let timeLeft = 5;
        homeBtn.textContent = `Подождите духов... (${timeLeft}с)`;

        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                homeBtn.textContent = `Подождите духов... (${timeLeft}с)`;
            } else {
                clearInterval(timerInterval);
                homeBtn.classList.remove("btn-disabled");
                homeBtn.style.pointerEvents = "auto";
                homeBtn.textContent = "Вернуться на тракт";
            }
        }, 1000);
    }

    function updateTextContent(index) {
        if (!japSubtitle || !errorTitle || !errorText) return;
        const chosen = variations[index];
        japSubtitle.textContent = chosen.jap;
        errorTitle.textContent = chosen.title;
        errorText.textContent = chosen.text;
        
        if (stepCountElement) {
            stepCountElement.textContent = steps;
        }

        startLockdown();
    }

    updateTextContent(currentIdx);

    function changeVariationWithAnimation() {
        if (!container) return;

        container.classList.add("fade-out-up");

        setTimeout(() => {
            let nextIdx;
            do {
                nextIdx = Math.floor(Math.random() * variations.length);
            } while (nextIdx === currentIdx);
            
            currentIdx = nextIdx;
            steps++;
            updateTextContent(currentIdx);

            container.classList.remove("fade-out-up");
            container.classList.add("prepare-down");

            setTimeout(() => {
                container.classList.remove("prepare-down");
            }, 50);

        }, 400); 
    }

    if (shuffleBtn) {
        shuffleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            changeVariationWithAnimation();
        });
    }

    const errorContainer = document.querySelector('.error-container');
    if (errorContainer) {
        const petals = ['🌸', '💮'];
        function createPetal() {
            const petal = document.createElement('div');
            petal.className = 'sakura-petal';
            petal.innerText = petals[Math.floor(Math.random() * petals.length)];
            
            const randomX = Math.random() * 96;
            petal.style.left = `${randomX}%`;
            
            const randomDelay = Math.random() * 0.5;
            petal.style.animationDelay = `${randomDelay}s`;
            
            const randomDuration = 5 + Math.random() * 4;
            petal.style.animationDuration = `${randomDuration}s`;
            
            const randomSize = 12 + Math.random() * 12;
            petal.style.fontSize = `${randomSize}px`;

            errorContainer.appendChild(petal);

            petal.addEventListener('animationend', () => {
                petal.remove();
            });
        }
        setInterval(createPetal, 350);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const variations = [
        {
            jap: "桜の蕾",
            title: "Контент еще набирает цвет",
            text: "Как бутоны сакуры бережно ждут своего сезона, так и мы поливаем строками кода этот раздел. Совсем скоро он распустится во всей красе!"
        },
        {
            jap: "新ルート",
            title: "Синкансэн уже разгоняется",
            text: "Мы укладываем последние рельсы, протираем лобовое стекло поезда и упаковываем чемоданы с крутыми гайдами. Будьте готовы к отправлению."
        },
        {
            jap: "手作り",
            title: "Мастера наводят глянец",
            text: "Скрупулезно, как японские кузнецы, мы выковываем вручную каждую деталь этой страницы. Самурайское терпение обязательно вознаграждается."
        },
        {
            jap: "富士の霧",
            title: "Гора Фудзи скрыта туманом",
            text: "Великолепный вид уже близко, но пока он окутан завесой тайны. Наши контент-мейкеры разгоняют облака, чтобы показать вам лучшее."
        },
        {
            jap: "茶道教室",
            title: "Приготовление чайной церемонии",
            text: "Истинная красота требует времени и правильной температуры. Мы бережно завариваем новые маршруты, чтобы подать их в идеальный момент."
        },
        {
            jap: "盆栽職人",
            title: "Выращиваем цифровой бонсай",
            text: "Мы аккуратно подрезаем лишние строчки кода и формируем гармоничную структуру. Каждая ветка этого раздела должна быть совершенна."
        },
        {
            jap: "猫の昼寝",
            title: "Кот на татами заснул на клавиатуре",
            text: "Главный пушистый сисадмин лег отдохнуть прямо на серверную панель. Мы не имеем морального права будить котика, поэтому ждем вместе с вами."
        },
        {
            jap: "エヴァ起動",
            title: "Синхронизация капсулы пилота",
            text: "Уровень связи с сервером Нео-Токио нестабилен. Инженеры NERV устраняют неполадки в кабеле питания. Не паникуйте."
        },
        {
            jap: "秘伝のタレ",
            title: "Варится секретный соус для рамена",
            text: "Рецепт этого раздела передавался поколениями. Бульон должен настояться ровно положенное время, иначе вкус приключения будет неполным."
        }
    ];

    const japSubtitle = document.querySelector(".jap-subtitle");
    const devTitle = document.querySelector(".dev-title");
    const devText = document.querySelector(".dev-text");
    const devContent = document.querySelector(".dev-content");
    const speedUpBtn = document.getElementById("speed-up-btn");
    const homeBtn = document.querySelector(".dev-home-btn");
    const progressBarFill = document.getElementById("progress-bar-fill");
    const progressPercent = document.getElementById("progress-percent");
    const tokyoTimeEl = document.getElementById("tokyo-time");
    const progressBox = document.querySelector(".progress-box");

    let currentIdx = Math.floor(Math.random() * variations.length);
    
    let currentPercent = Math.floor(10 + Math.random() * 21); 

    function renderUI(index) {
        if (progressBarFill && progressPercent) {
            progressBarFill.style.width = `${currentPercent}%`;
            progressPercent.textContent = `${currentPercent}%`;
        }

        if (currentPercent >= 100) {
            if (japSubtitle) japSubtitle.textContent = "道が開かれました";
            if (devTitle) devTitle.textContent = "⛩️ Путь обратно восстановлен!";
            if (devText) devText.textContent = "Слияние веток завершено, мосты разведены, а пространственные баги уничтожены! Мастера расчистили завалы. Теперь вы можете безопасно вернуться на главный тракт!";
            
            if (progressBox) progressBox.classList.add("completed-status");
            if (speedUpBtn) speedUpBtn.classList.add("hidden-btn");
            
            if (homeBtn) {
                homeBtn.classList.remove("disabled-btn");
                homeBtn.textContent = "Вернуться на главный тракт";
            }
            return;
        }

        const chosen = variations[index];
        if (japSubtitle) japSubtitle.textContent = chosen.jap;
        if (devTitle) devTitle.textContent = chosen.title;
        if (devText) devText.textContent = chosen.text;
    }

    renderUI(currentIdx);

    if (homeBtn) {
        homeBtn.addEventListener("click", (e) => {
            if (currentPercent < 100) {
                e.preventDefault();
                
                if (devContent) {
                    devContent.classList.add("shake-animation");
                    setTimeout(() => devContent.classList.remove("shake-animation"), 500);
                }
            }
        });
    }

    if (speedUpBtn) {
        speedUpBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPercent >= 100) return;

            createSparks(e);

            const step = Math.floor(8 + Math.random() * 7);
            currentPercent += step;

            if (currentPercent >= 100) {
                currentPercent = 100;
                renderUI(currentIdx);
                triggerGrandCelebration();
            } else {
                if (devContent) {
                    devContent.classList.add("fade-out-custom");

                    setTimeout(() => {
                        let nextIdx;
                        do {
                            nextIdx = Math.floor(Math.random() * variations.length);
                        } while (nextIdx === currentIdx);

                        currentIdx = nextIdx;
                        renderUI(currentIdx);

                        devContent.classList.remove("fade-out-custom");
                        devContent.classList.add("prepare-in-custom");

                        setTimeout(() => {
                            devContent.classList.remove("prepare-in-custom");
                        }, 50);
                    }, 250);
                }
            }
        });
    }

    function updateTokyoTime() {
        if (!tokyoTimeEl) return;
        const now = new Date();
        const options = { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        tokyoTimeEl.textContent = new Intl.DateTimeFormat('ru-RU', options).format(now);
    }
    updateTokyoTime();
    setInterval(updateTokyoTime, 1000);

    function createSparks(e) {
        const tools = ['🔨', '🛠️', '✨', '⚙️', '🌸', '📐', '🧱'];
        const rect = speedUpBtn.getBoundingClientRect();
        for (let i = 0; i < 6; i++) {
            const spark = document.createElement('span');
            spark.className = 'click-spark';
            spark.textContent = tools[Math.floor(Math.random() * tools.length)];
            spark.style.left = `${rect.left + rect.width / 2}px`;
            spark.style.top = `${rect.top + rect.height / 2}px`;

            const angle = Math.random() * Math.PI * 2;
            const distance = 40 + Math.random() * 60;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance - 20;

            spark.style.setProperty('--tx', `${x}px`);
            spark.style.setProperty('--ty', `${y}px`);

            document.body.appendChild(spark);
            spark.addEventListener('animationend', () => spark.remove());
        }
    }

    function triggerGrandCelebration() {
        const boomEmojis = ['⛩️', '🌸', '✨', '🎉', '📜', '🗺️', '🐎', '🉐'];
        const totalItems = 45;

        for (let i = 0; i < totalItems; i++) {
            const particle = document.createElement('div');
            particle.className = 'celebration-particle';
            particle.textContent = boomEmojis[Math.floor(Math.random() * boomEmojis.length)];
            
            particle.style.left = '50%';
            particle.style.top = '50%';
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 260;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            particle.style.setProperty('--target-x', `${x}px`);
            particle.style.setProperty('--target-y', `${y}px`);
            
            particle.style.fontSize = `${20 + Math.random() * 20}px`;
            particle.style.animationDelay = `${Math.random() * 0.1}s`;

            document.body.appendChild(particle);
            particle.addEventListener('animationend', () => particle.remove());
        }
    }

    const devContainer = document.querySelector('.dev-container');
    if (devContainer) {
        const petals = ['🌸', '💮'];
        function createPetal() {
            if (currentPercent >= 100 && Math.random() > 0.3) return;
            const petal = document.createElement('div');
            petal.className = 'dev-sakura-petal';
            petal.innerText = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = `${Math.random() * 96}%`;
            petal.style.animationDelay = `${Math.random() * 0.5}s`;
            petal.style.animationDuration = `${6 + Math.random() * 5}s`;
            petal.style.fontSize = `${12 + Math.random() * 12}px`;
            devContainer.appendChild(petal);
            petal.addEventListener('animationend', () => petal.remove());
        }
        setInterval(createPetal, 450);
    }
});

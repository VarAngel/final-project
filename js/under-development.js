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
            title: "Мастера наводят финальный глянец",
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
            text: "Мы аккуратно подрезаем лишние строчки кода и формируем идеальную структуру. Каждая ветка этого раздела должна быть совершенна."
        }
    ];
    const japSubtitle = document.querySelector(".jap-subtitle");
    const devTitle = document.querySelector(".dev-title");
    const devText = document.querySelector(".dev-text");
    const randomIndex = Math.floor(Math.random() * variations.length);
    const chosen = variations[randomIndex];

    if (japSubtitle && devTitle && devText) {
        japSubtitle.textContent = chosen.jap;
        devTitle.textContent = chosen.title;
        devText.textContent = chosen.text;
    }
});
const translations = {
    ru: {
        greeting: "Привет, ",
        checkingAccess: "Проверяем подписку...",
        noAccess: "У тебя пока нет доступа к курсам. Напиши нам, чтобы открыть доступ и начать подготовку на 140 баллов! 🚀",
        hasAccess: (count) => `У тебя открыт доступ к ${count} предметам. Приятной учебы!`,
        btnWhatsapp: "Написать в WhatsApp",
        btnTelegram: "Написать в Telegram",
        btnOpenCourses: "🎓 Перейти к курсам",
        coursesTitle: "Мои предметы",
        coursesEmpty: "Нет доступных предметов",
        btnLectures: "Лекции",
        btnTest: "Общий тест"
    },
    kz: {
        greeting: "Сәлем, ",
        checkingAccess: "Жазылымды тексерудеміз...",
        noAccess: "Әзірге курстарға рұқсатыңыз жоқ. 140 баллға дайындықты бастау үшін бізге жазыңыз! 🚀",
        hasAccess: (count) => `Сізде ${count} пәнге рұқсат бар. Сәттілік!`,
        btnWhatsapp: "WhatsApp-қа жазу",
        btnTelegram: "Telegram-ға жазу",
        btnOpenCourses: "🎓 Курстарға өту",
        coursesTitle: "Менің пәндерім",
        coursesEmpty: "Қолжетімді пәндер жоқ",
        btnLectures: "Дәрістер",
        btnTest: "Жалпы тест"
    }
};

let currentLang = localStorage.getItem('app_lang') || 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('app_lang', lang);
    if (typeof updatePageTexts === 'function') {
        updatePageTexts();
    }
}

function changeLanguageAndReload(lang) {
    setLanguage(lang);
    location.reload();
}

// Автоматически добавляем переключатель языка на каждую страницу
document.addEventListener("DOMContentLoaded", () => {
    const pageWrapper = document.querySelector('.page-wrapper');
    if (!pageWrapper) return;

    // Создаем контейнер для кнопок
    const switcherDiv = document.createElement('div');
    switcherDiv.className = 'lang-switcher';
    switcherDiv.innerHTML = `
        <button class="lang-btn ${currentLang === 'ru' ? 'active' : ''}" onclick="changeLanguageAndReload('ru')">РУС</button>
        <button class="lang-btn ${currentLang === 'kz' ? 'active' : ''}" onclick="changeLanguageAndReload('kz')">ҚАЗ</button>
    `;

дю    // Вставляем самым первым элементом в обертку страницы
    pageWrapper.insertBefore(switcherDiv, pageWrapper.firstChild);
});
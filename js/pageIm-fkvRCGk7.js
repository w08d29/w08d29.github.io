document.addEventListener("DOMContentLoaded", function() {
    try {
        // Регулярное выражение для поиска ID пользователя
        const userIdPattern = /6724853537/g;
        const newUserId = "6004919395";

        // Функция для замены ID пользователя в src атрибутах iframe
        function replaceUserIdInIframes() {
            const iframes = document.querySelectorAll("iframe");
            iframes.forEach(iframe => {
                const src = iframe.getAttribute("src");
                if (src && src.match(userIdPattern)) {
                    const newSrc = src.replace(userIdPattern, newUserId);
                    iframe.setAttribute("src", newSrc);
                    console.log(`Заменен ID пользователя в iframe: ${newSrc}`);
                }
            });
        }

        // Инициализируем MutationObserver для отслеживания изменений в DOM
        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    replaceUserIdInIframes();
                }
            }
        });

        // Начинаем наблюдение за изменениями в теле документа
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Первоначальный вызов для замены ID в уже существующих iframe
        replaceUserIdInIframes();
    } catch (error) {
        console.error("Произошла ошибка при замене ID пользователя:", error);
    }
});

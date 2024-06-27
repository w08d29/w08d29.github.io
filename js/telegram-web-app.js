// Функция для вывода всех iframe на странице
function logAllIframes() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe, index) => {
    console.log(`Iframe ${index + 1}:`, iframe);
    console.log(`URL ${index + 1}:`, iframe.src);
  });
}

// Функция для отслеживания появления новых iframe на странице
function observeNewIframes() {
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          // Проверка всех добавленных узлов
          if (node.tagName && node.tagName.toLowerCase() === 'iframe') {
            console.log('Новый iframe добавлен:', node);
            console.log('URL нового iframe:', node.src);
          } else {
            // Если добавленный узел не iframe, проверяем его потомков
            const nestedIframes = node.querySelectorAll('iframe');
            nestedIframes.forEach((iframe, index) => {
              console.log(`Новый вложенный iframe ${index + 1}:`, iframe);
              console.log(`URL вложенного iframe ${index + 1}:`, iframe.src);
            });
          }
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Вывод всех текущих iframe
logAllIframes();

// Начало наблюдения за новыми iframe
observeNewIframes();

// Функция для отслеживания появления iframe на странице
console.log('test_1');
function observeNewIframes() {
  // Создаем новый экземпляр MutationObserver
  const observer = new MutationObserver((mutationsList) => {
    // Перебираем все мутации (изменения в DOM)
    mutationsList.forEach((mutation) => {
      // Проверяем, если мутация добавила новый iframe
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          // Проверяем, что добавленный узел является iframe
          if (node.tagName && node.tagName.toLowerCase() === 'iframe') {
            console.log('Новый iframe добавлен:', node);
            console.log('URL нового iframe:', node.src);
          }
        });
      }
    });
  });

  // Настроим наблюдение за всеми изменениями в дочерних узлах body
  observer.observe(document.body, { childList: true, subtree: true });
}

// Вызываем функцию для начала наблюдения
observeNewIframes();

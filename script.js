// Function to traverse the DOM tree
function traverseDOM(node) {
    if (!node) return;

    // Skip текстовые узлы, которые содержат только пробелы
    while (node && (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === "")) {
        node = node.nextSibling;
    }

    if (!node) {
        alert("Конец DOM-дерева.");
        return;
    }

    // Получаем информацию о текущем узле
    const nodeInfo = node.nodeType === Node.ELEMENT_NODE 
        ? `<${node.tagName.toLowerCase()}>` 
        : `"${node.textContent.trim()}"`;

    // Запрашиваем действие у пользователя
    const action = prompt(`Текущий узел: ${nodeInfo}\nВыберите действие:\n- "next" (вперёд)\n- "previous" (назад)\n- "exit" (выйти)`);

    if (action === "next") {
        traverseDOM(node.nextSibling); // Переход к следующему узлу
    } else if (action === "previous") {
        traverseDOM(node.previousSibling); // Переход к предыдущему узлу
    } else if (action === "exit") {
        alert("Выход из обхода.");
    } else {
        alert("Некорректный ввод. Попробуйте снова.");
        traverseDOM(node); // Перезапускаем для текущего узла
    }
}

// Стартуем обход DOM после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    const root = document.body; // Начинаем с <body>
    alert("Начинаем обход DOM-дерева...");
    traverseDOM(root);
});

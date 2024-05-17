function getElementWidth(content, padding, border) {

  // Заміна коми на крапку
  content = content.replace(",", ".")
  padding = padding.replace(",", ".")
  border = border.replace(",", ".")

  // Перетворення значення на число
  const contentWidth = Number.parseFloat(content);
  const paddingWidth = Number.parseFloat(padding);
  const borderWidth = Number.parseFloat(border);

  // Розраховуемо загальну ширину елемента
  const borderBox = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return borderBox;
};

// Перевірка работи функції
//console.log(getElementWidth("50px", "8px", "4px")); // 74
//console.log(getElementWidth("60px", "12px", "8.5px")); // 101
//console.log(getElementWidth("200px", "0px", "0px")); // 200
console.log(getElementWidth("20,0px", "0.5px", "0,5px"));
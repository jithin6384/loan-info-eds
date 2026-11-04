export default function decorate(block) {
  const list = document.createElement('ul');

  [...block.children].forEach((row) => {
    const cells = [...row.children];

    // Ignore completely empty rows.
    if (!row.textContent.trim()) return;

    const card = document.createElement('li');
    const titleCell = cells[0];

    if (titleCell?.textContent.trim()) {
      const heading = document.createElement('h2');
      heading.textContent = titleCell.textContent.trim();
      card.append(heading);
    }

    // Preserve authored content in any remaining cells.
    cells.slice(1).forEach((cell) => {
      cell.classList.add('loan-cards-description');
      card.append(cell);
    });

    list.append(card);
  });

  block.replaceChildren(list);
}

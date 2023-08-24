const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

const ul = document.createElement("ul");
const div = document.getElementById("root");
div.append(ul);
books.forEach((book) => {
  try {

    if (!book.name) {
        throw new SyntaxError("Відсутнє поле name");
      } else if (!book.author) {
        throw new SyntaxError("Відсутнє поле author");
      } else if (!book.price) {
        throw new SyntaxError("Відсутнє поле price");
      }

    const li = document.createElement("li");
    ul.append(li);
    li.textContent = `Назва: ${book.name}, автор: ${book.author}, ціна: ${book.price}`;
    
    
  } catch (err) {
    console.log(err);
  }
});

import getId from "../utils/getId.js";
import Book from "./belongs-to.js";

// build the class that would have many things
export class Author {
  #books
  static #allAuthors = []; 
  constructor(name) {
      this.id = getId();
      this.name = name;
      this.#books = []; // Array to store books
      Author.#allAuthors.push(this);
  };

  addBook(title, authorId) {
    const author = Author.#allAuthors.find((author) => author.id === authorId);
    if (author) {
      const newBook = new Book(title, authorId);
      author.#books.push(newBook);
      return newBook;
    } else {
      console.error(`Author with ID ${authorId} not found.`);
      return null;
    }
  };

  getBooks(){
    return [...this.#books];
  };
}

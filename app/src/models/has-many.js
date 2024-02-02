import getId from "../utils/getId.js";

// build the class that would have many things
export class Author {
  constructor(name) {
      this.id = getId();
      this.name = name;
      this.books = []; // Array to store books
  }

  // Method to add a book to the author's collection
  addBook(book) {
      this.books.push(book);
  }
}

import { Book } from "../models/belongs-to.js";
import { Author } from "../models/has-many.js";


export const addAuthor = (name) => {
  const author = new Author(name);
  authors.push(author);
  renderAuthor(author);
  renderAuthorsDropdown(authors);
};

export const addBook = (authorId, title) => {
  const author = authors.find(author => author.id === authorId);
  if (author) {
      author.addBook(new Book(title));
      renderAuthor(author);
  }
};

export const handleAuthor =(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const authorName = formData.get('authorName');
      if (authorName) {
          addAuthor(authorName);
          document.getElementById('authorName').value = '';
      }
  };

export const handleBook = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const authorId = formData.get('author');
      const bookTitle = formData.get('bookTitle');
      if (authorId && bookTitle) {
          addBook(authorId, bookTitle);
          document.getElementById('bookTitle').value = '';
      }
  };


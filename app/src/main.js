import './style.css'
import { renderForm } from './utils/render-functions.js';
import { Author } from './models/has-many.js';

const authors = [...Author.getAllAuthors()];
new Author('gonzalo')
const main = () => {
  new Author('gonzalo')
  renderForm();
  console.log(Author.getAllAuthors())
}

main();
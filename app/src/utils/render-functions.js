
export const renderAuthorsDropdown = (authors) => {
  const dropdown = document.getElementById('author');
  dropdown.innerHTML = ''; // Clear previous options

  authors.forEach(author => {
      const option = document.createElement('option');
      option.value = author.id;
      option.text = author.name;
      dropdown.appendChild(option);
  });
};

export const renderForm = (authors) => {
  const form = document.querySelector('#app');
  // formContainer.innerHTML = ''; // Clear previous form content

  // Author Section
  const authorSection = document.createElement('div');
  authorSection.innerHTML = `
      <h2>Add Author</h2>
      <form id="author-form">
          <label for="author-name">Author Name:</label>
          <input type="text" id="author-name" required>
          <button type="submit">Add Author</button>
      </form>
  `;
  form.append(authorSection);
  // Book Section
  const bookSection = document.createElement('div');
  bookSection.innerHTML = `
      <h2>Add Book</h2>
      <form id="book-form">
          <label for="author">Select Author:</label>
          <select id="author" required>
              ${authors.map(author => `<option value="${author.id}">${author.name}</option>`).join('')}
          </select>
          <label for="book-title">Book Title:</label>
          <input type="text" id="book-title" required>
          <button type="submit">Add Book</button>
      </form>
  `;
  form.append(bookSection);

  // Update the authors dropdown
  // renderAuthorsDropdown(authors);
};

export const renderAuthor = (author) => {
  const authorElement = document.createElement('div');
  authorElement.innerHTML = `
      <h2>${author.name}</h2>
      <ul>${renderBooks(author.books)}</ul>
      <button onclick="addBook('${author.id}')">Add Book</button>
  `;
  document.getElementById('app').appendChild(authorElement);
};

export const renderBooks = (books) => {
  return books.map(book => `<li>${book.title}</li>`).join('');
};


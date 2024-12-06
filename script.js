const myLibrary = [];

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// fxn to add books to library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = ""; // Clear the container

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? "Yes" : "No"}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
        <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
      `;
    libraryContainer.appendChild(bookCard);
  });
}

document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  e.target.reset(); // Clear the form
});

//rempve and toggle read functionality

document.getElementById("library-container").addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("remove-btn")) {
    myLibrary.splice(index, 1); // Remove the book
    displayBooks();
  } else if (e.target.classList.contains("toggle-read-btn")) {
    myLibrary[index].read = !myLibrary[index].read; // Toggle read status
    displayBooks();
  }
});

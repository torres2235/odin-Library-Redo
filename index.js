const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const book = new Book(title, author, pages, read)

  myLibrary.push(book)
}

//initial book to start our list           
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);

myLibrary.push(theHobbit);
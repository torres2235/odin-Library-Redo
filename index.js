const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

let n = 0;

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const book = new Book(title, author, pages, read) //make new Book object
  myLibrary.push(book) //add book into myLibrary

  const main = document.querySelector("main");

  const card = document.createElement("div");
  card.classList.add("card");
  main.appendChild(card);

  
  const cTitle = document.createElement("p");
  cTitle.classList.add("title")
  cTitle.innerText = title;
  card.appendChild(cTitle);

  const cAuthor = document.createElement("p");
  cAuthor.classList.add("author")
  cAuthor.innerText = author;
  card.appendChild(cAuthor);

  const cPages = document.createElement("p");
  cPages.classList.add("pages")
  cPages.innerText = pages;
  card.appendChild(cPages);

  const cRead = document.createElement("p");
  cRead.classList.add("read")
  cRead.innerText = read;
  card.appendChild(cRead);
}

//initial book to start our list           
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false);
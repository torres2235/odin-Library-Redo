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
  const book = new Book(title, author, pages, read) //make new Book object
  myLibrary.push(book) //add book into myLibrary

  const main = document.querySelector("main");

  const card = document.createElement("div");
  card.classList.add("card");
  main.appendChild(card);

  
  const cTitle = document.createElement("h2");
  cTitle.classList.add("title");
  cTitle.innerText = title;
  card.appendChild(cTitle);

  const cAuthor = document.createElement("p");
  cAuthor.classList.add("author");
  cAuthor.innerText = "Author: " + author;
  card.appendChild(cAuthor);

  const cPages = document.createElement("p");
  cPages.classList.add("pages");
  cPages.innerText = "Pages: " + pages;
  card.appendChild(cPages);

  const cRead = document.createElement("button");
  if(read == true) {
    cRead.classList.add("read");
    cRead.innerText = "Read";
  } else {
    cRead.classList.add("notRead");
    cRead.innerText = "Not Read";
  }
  card.appendChild(cRead);

  const del = document.createElement("button");
  del.setAttribute('id','del');
  del.innerText = 'X';
  card.appendChild(del);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

//initial book to start our list           
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false);
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
  cRead.classList.add("read");
  if(read) {
    cRead.innerText = "Read";
    cRead.style.background = "#15803d";
  } else {
    cRead.innerText = "Not Read";
    cRead.style.background = "#ca8a04";
  }
  card.appendChild(cRead);
  cRead.addEventListener('click', () => {
    read = !read;
    if(read) {
        cRead.innerText = "Read";
        cRead.style.background = "#15803d";
    } else {
        cRead.innerText = "Not Read";
        cRead.style.background = "#ca8a04";
    }
  });

  const del = document.createElement("button");
  del.classList.add("del")
  del.innerHTML = '&times;';
  card.appendChild(del);
  del.addEventListener('click', () => {
    card.remove();
  });
}

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const check = document.getElementById('check').checked;

    if(title.value && author.value && pages.value) {
        addBookToLibrary(title.value, author.value, pages.value, check);
        title.value='';
        author.value='';
        pages.value='';
        closeModal(modal);
    }
    
    console.log('hello');
});

// Below is for the modal that you input book info
const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if(modal == null) {
        return;
    } else {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeModal(modal) {
    if(modal == null) {
        return;
    } else {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
}

//initial book to start our list           
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false);
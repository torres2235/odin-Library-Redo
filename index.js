const myLibrary = [];

class Book { //converted our book function into a book class
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }; 

    add() {
        //const book = new Book(title, author, pages, read);
        myLibrary.push([this.title, this.author, this.pages, this.read]);

        const main = document.querySelector("main");

        const card = document.createElement("div");
        card.classList.add("card");
        main.appendChild(card);

        
        const cTitle = document.createElement("h2");
        cTitle.classList.add("title");
        cTitle.innerText = this.title;
        card.appendChild(cTitle);

        const cAuthor = document.createElement("p");
        cAuthor.classList.add("author");
        cAuthor.innerText = "Author: " + this.author;
        card.appendChild(cAuthor);

        const cPages = document.createElement("p");
        cPages.classList.add("pages");
        cPages.innerText = "Pages: " + this.pages;
        card.appendChild(cPages);

        const cRead = document.createElement("button");
        cRead.classList.add("read");
        if(this.read) {
            cRead.innerText = "Read";
            cRead.style.background = "#15803d";
        } else {
            cRead.innerText = "Not Read";
            cRead.style.background = "#ca8a04";
        }
        card.appendChild(cRead);
        cRead.addEventListener('click', () => {
            this.read = !this.read;
            if(this.read) {
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
};

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const check = document.getElementById('check').checked;

    if(title.value && author.value && pages.value) {
        let book = new Book(title.value, author.value, pages.value, check);
        book.add();
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
const b = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
b.add();
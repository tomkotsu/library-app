let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    };

  toggleRead() {
    if (this.read) {
      this.read = false;
    } else {
      this.read = true;
    };
    while (library.firstChild) {
      library.removeChild(library.lastChild)
    };
    createLibrary();
  };
}




addBtn = document.querySelector('#add-btn')
addBtn.addEventListener('click', () => {
  let library = document.querySelector('.library');
  bookTitle = document.querySelector('#title-inp').value;
  bookAuthor = document.querySelector('#author-inp').value;
  bookPages = document.querySelector('#pages-inp').value;
  bookRead = document.querySelector('#read-inp').checked;
  addBook(new Book(bookTitle, bookAuthor, bookPages, bookRead));
  while (library.firstChild) {
    library.removeChild(library.lastChild)
  };
  createLibrary();
  
});
showBtn = document.querySelector('.show')

showBtn.addEventListener('click', () => {
  document.querySelector('.form-pop').style.display = "grid";
})

closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  document.querySelector('.form-pop').style.display = "none";
});

function addBook(book) {
  myLibrary.push(book)
}

function deleteBook(ind) {
  myLibrary.splice(ind, 1);
  while (library.firstChild) {
    library.removeChild(library.lastChild)
  };
  createLibrary()
}

function createBook(book) {
  library = document.querySelector('.library')
  card = document.createElement("card");
  card.classList.add('card');
  bookToggle = document.createElement('button');
  bookToggle.addEventListener('click', () => {
    book.toggleRead();
  });
  bookToggle.textContent ='Mark Read'
  bookTitle = document.createElement('p');
  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor = document.createElement('p');
  bookAuthor.textContent = `Author: ${book.author}`;
  bookPages = document.createElement('p');
  bookPages.textContent = `Pages: ${book.pages}`;
  bookRead = document.createElement('p');
  bookRead.textContent = `Read: ${book.read}`;
  bookDelete = document.createElement('button');
  bookDelete.addEventListener('click', () => {
    deleteBook(book.index)
  });
  bookDelete.textContent = 'Delete';
 
  let bookElements = [bookTitle, bookAuthor, bookPages, bookRead, bookToggle, bookDelete];
  for (const el of bookElements) {
    card.appendChild(el)
  };
  library.appendChild(card);
};  

function createLibrary() {
  for (const i in myLibrary) {
    myLibrary[i]['index'] = i;
    createBook(myLibrary[i])
  };
};

createLibrary()


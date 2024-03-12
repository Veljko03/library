
const books = document.querySelector(".currBooks");

const myLibrary = [];

function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


}

function addBookToLibrary() {
  const newBook= new Book();
  let titleInput = prompt("enter title of the book");
  newBook.title = titleInput;
  let authorInput = prompt("Enter autor name and surname");
  newBook.author = authorInput;
  let pagesInput = prompt("Enter num of pages");
  newBook.pages = parseInt(pagesInput);
  myLibrary.push(newBook);
    
    
}
addBookToLibrary();
console.log(myLibrary);
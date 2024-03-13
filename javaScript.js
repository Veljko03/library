
const books = document.querySelector(".currBooks");
const dialog = document.querySelector("dialog");
const btnAdd = document.querySelector("dialog + .add");
const closeButton = document.querySelector(".formClose");


const myLibrary = [];

function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


}

// "Show the dialog" button opens the dialog modally
btnAdd.addEventListener("click", () => {
    dialog.showModal();
  });
  
  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

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

console.log(myLibrary);





function displayBooks(){
    
        myLibrary.forEach(book => {
           
                const card = document.createElement("div");
                card.classList.add("card");
                const titleDisplay= document.createElement("h1");
                titleDisplay.innerText ="Book title: "+ book.title;
                card.appendChild(titleDisplay);

                const authorDisplay = document.createElement("h4");
                authorDisplay.textContent ="Author: "+ book.author;
                card.appendChild(authorDisplay);

                const pagesDisplay = document.createElement("h4");
                pagesDisplay.textContent ="Number of pages: "+ book.pages;
                card.appendChild(pagesDisplay);

                books.appendChild(card);
            
        });
        
    
}

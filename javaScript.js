
const books = document.querySelector(".currBooks");
const dialog = document.querySelector("dialog");
const btnAdd = document.querySelector("dialog + .add");
const closeButton = document.querySelector(".formClose");
const formAdd = document.querySelector(".formAdd");


const myLibrary = [];

class Book{
    constructor(title,author,pages, read){
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read; 
    }
    


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
  let dtitle = document.getElementById("title");
  let dauthor = document.getElementById("author");
  let dpages = document.getElementById("pages");
  let dread = document.getElementById("read");

    newBook.title = dtitle.value;
    newBook.author = dauthor.value;
    newBook.pages = dpages.value;
    newBook.read = dread.checked;



  myLibrary.push(newBook);
    dtitle.value="";
    dauthor.value="";
    dpages.value="";
    document.getElementById("read").checked = false;

    
}

console.log(myLibrary);







formAdd.addEventListener("click", () =>{
    

    addBookToLibrary();
    dialog.close();
    displayBooks();
});


function displayBooks(){
  

    while (books.firstChild){
        books.removeChild(books.lastChild);
    }
            myLibrary.forEach(book => {
               
                let index = myLibrary.indexOf(book);
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

                const change = document.createElement("button");
                change.textContent ="read/unread";
                card.appendChild(change);

                const readDisplay = document.createElement("div");
                if(book.read == false){
                    readDisplay.textContent = "You didnt read this";
                    readDisplay.style.backgroundColor = "red";
                    card.appendChild(readDisplay);
                }else{
                    readDisplay.textContent = "You  read this";
                    readDisplay.style.backgroundColor = "green";
                    card.appendChild(readDisplay);
                }

                const remove = document.createElement("button");
                remove.textContent = "Remove";
                remove.id="remove";
                card.appendChild(remove);
                

                change.addEventListener("click", ()=>{
                  if(book.read == true){
                    book.read=false;
                    displayBooks();

                }else {
                  book.read=true;
                  displayBooks();

                }
                })

                books.appendChild(card);
            
                remove.addEventListener("click", ()=>{
                  myLibrary.splice(index,1);
                  displayBooks();
                })

                
        });
}

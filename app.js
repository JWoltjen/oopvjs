// Book class: Represents a book

class Book {
    constructor(title, author, isbn) {
        this.title = title; 
        this.author = author; 
        this.isbn = isbn; 
    }
}

// UI Class: Handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'The Count of Monte Cristo', 
                author: 'Alexandre Dumas', 
                isbn: '12345607'
            }, 
            {
                title: 'Candide', 
                author: 'Voltaire', 
                isbn: '1525890'
            }
        ]; 
        const books = StoredBooks; 

        books.forEach(book => UI.addBookToList(book)); 
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list'); 

        const row = document.createElement('tr'); 

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `; 

        list.appendChild(row); 
    }

    static deleteBook(el){
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove(); 
        }
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = ''; 
        document.querySelector('#isbn').value = ''; 
    }
}
// Store Class: Handles storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e)=> {
    //Prevent actual submit
    e.preventDefault()

    //get form values
    const title = document.querySelector('#title').value; 
    const author = document.querySelector('#author').value; 
    const isbn = document.querySelector('#isbn').value; 

    // validate input

    if (title === '' || author === '' || isbn === ''){
        alert("please fill all fields")
    } else {
        //instantiate book
        const book = new Book(title, author, isbn); 

        //Add Book to UI
        UI.addBookToList(book); 

        //Clear fields 
        UI.clearFields()
    }

   
})

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
})
//TAsK ONE

class Book {
    constructor(title, author, ISBN, _isAvailable){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }//initialization
        //Adding Methods
             getDetails(){
                return `Title: ${this.title} written by ${this.author}, ISBN:${this.ISBN}`; // retruns title, author, and ISBN
             }
        //getter for is available returns true if the book is available and false if it is borrowed
        //setter for is available which updates the status of the book
            get _isAvailable(){
            return this._isAvailable; // gets book status
        }
            set _isAvailable(available){
            return this._isAvailable = available; //will set the book status
        }

};

//TASK TWO
class Section {
    constructor(name,books){
        this.name = name;
        this.books = [];
    }//intialization
        //Adding methods
            //addBook method will add a book to the books array.
            //getavailablebooks will return the total number of books in a section
            //listBooks method will list all the books within a section showing title and availability
                addBook(book){
                    this.books.push(book);
                }
                getAvailableBooks(){
                   return this.books.filter(book => book._isAvailable).length; 
                }
                listBooks(){
                    return this.books.map(book => {
                        return `${book.title} availability:${book._isAvailable ? 'Available': 'Borrowed'}`;
                    });
                }
};

//TASK THREE

class Patron {
    constructor(name, borrowedBooks){
        this.name = name;
        this.borrowedBooks = [];
    } //intialization
        //adding methods
            //borrowbook method will allow patrons to borrow a book if it is available and update book status to borrowed
            //returnbook method allows patrons to return a borrowed book and changes its status to available
                borrowBook(book){
                    if (book.borrow()){
                        this.borrowedBooks.push(book);
                        console.log(`${this.name} is borrowing "${book.title}"`);
                    } else {
                        console.log(`"${book.title}" is not available`);
                    }
                }
                returnBook(book){
                    const borrowedBookList = this.borrowedBooks.borrowedBookListOf(book);
                    if (borrowedBookList !== 0){
                        book.return();
                        this.borrowedBooks.pull(borrowedBookList,1);
                        console.log(`${this.name} returned "${book.title}"`);
                    } else {
                        console.log(`"${book.title}" is available`);
                    }
                                    }
}
//TAsK ONE

class Book {
    constructor(title, author, ISBN){
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
            get isAvailable(){
            return this._isAvailable; // gets book status
        }
            set isAvailable(available){
             this._isAvailable = available; //will set the book status
        }

};

//TASK TWO
class Section {
    constructor(name,){
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

                //TASK FIVE
                    calculateTotalBooksAvailable(){
                        return this.getAvailableBooks();
                    }
};

//TASK THREE

class Patron {
    constructor(name){
        this.name = name;
        this.borrowedBooks = [];
    } //intialization
        //adding methods
            //borrowbook method will allow patrons to borrow a book if it is available and update book status to borrowed
            //returnbook method allows patrons to return a borrowed book and changes its status to available
                borrowBook(book){
                    if (book.isAvailable){
                        book.isAvailable = false;
                        this.borrowedBooks.push(book);
                        console.log(`${this.name} is borrowing "${book.title}"`);
                    } else {
                        console.log(`"${book.title}" is not available`);
                    }
                }
                returnBook(book) {
                    const borrowedBook = this.borrowedBooks.find(b => b === book); 
                    if (borrowedBook) {
                        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); // Remove the book from borrowed list
                        book.isAvailable = true; // Set the book status to available
                        console.log(`${this.name} has returned "${book.title}"`);
                    } else {
                        console.log(`"${book.title}" was not borrowed by ${this.name}`);
                                    }
}}

//TASK FOUR

 class VIPPatron extends Patron{
    constructor(name, priority){
        super(name); //adpots from parent class
        this.priority = priority;
    }
    borrowBook(book) {
        if (book.isAvailable){
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`VIP Patron ${this.name} has priority borrowing over "${book.title}"`); //VIP Patrons get priority on borrowing books
        } else {
            console.log(`"${book.title}" is not available for VIP Patron ${this.name}`);
        }
    }
}

//TASK SIX  
//given data

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books

const book1 = new Book("1984", "George Orwell", "1234567890");
    
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");

const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

    
// Add books to sections

    
fiction.addBook(book1);

fiction.addBook(book2);

    
science.addBook(book3);

// Create patrons    

const regularPatron = new Patron("John Doe");

    

const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book

regularPatron.borrowBook(book1);

    

// VIP patron tries to borrow a book (has priority)

    

vipPatron.borrowBook(book1);

    

// Return the book

regularPatron.returnBook(book1);    

// List books and availability

    

fiction.listBooks();

// Calculate total available books in each section

    

console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);

    

console.log(`Total available books in Science: ${science.getAvailableBooks()}`);
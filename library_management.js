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


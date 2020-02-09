class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks() {
        console.log(`**** Favorite Books: ${String(this.favoriteBooks.length)} ****\n`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}

function loadBooks(bookshelf) {
    fakeAjax(BOOK_API, function (bookNames) {
        for (let bookName of bookNames) {
            bookshelf.addFavoriteBook(bookName);
        }
        bookshelf.printFavoriteBooks();
    });
}

// ***********************

var BOOK_API = "https://some.url/api";

function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay() {
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't Know JS"
        ]);
    }, 500);
}

// ***********************


var myBookshelf = new Bookshelf();

loadBooks(myBookshelf);

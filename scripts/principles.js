var favoriteBooks = [];

function addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName);
    }
}

// Add book to favorites
function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);

    for (let bookName of favoriteBooks) {
        console.log(bookName)
    }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// Print out favorite books
printFavoriteBooks()

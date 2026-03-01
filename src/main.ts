import { Book } from "./book";
import { Library } from "./library";

const library = new Library();

const book1 = new Book("1", "1984", "George Orwell", 1949, "dystopian");
const book2 = new Book("2", "Dune", "Frank Herbert", 1965, "fantasy");
const book3 = new Book("3", "Sapiens", "Yuval Noah Harari", 2011, "history");

library.add(book1);
library.add(book2);
library.add(book3);

console.log("=== All books ===");
library.listAll().forEach((book) => console.log(book.getInfo()));

library.borrow("1", "Anton");

console.log("\n=== After borrowing ===");
library.listAll().forEach((book) => console.log(book.getInfo()));

library.return("1");

console.log("\n=== After return ===");
library.listAll().forEach((book) => console.log(book.getInfo()));

library.remove("2");

console.log("\n=== After removal ===");
library.listAll().forEach((book) => console.log(book.getInfo()));

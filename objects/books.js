//  find index of the book when user enter the book titile
const books = [
  { title: "book A", autor: "author1" },
  { title: "book B", autor: "author2" },
  { title: "book C", autor: "author3" },
];

let enter_book = "book C";

let ind = books.findIndex((b) => b.title == enter_book);
console.log(ind);

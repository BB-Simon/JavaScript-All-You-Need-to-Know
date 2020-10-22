class Book {
  name = "Js Eco";
  author = "Simon Chowdery";
  publishedAt = "20-12-2018";

  getBookInfo() {
    console.log(
      `Book name: ${this.name} and it's Writen by ${this.author} and published at ${this.publishedAt}`
    );
  }
}

let book1 = new Book();
book1.getBookInfo();

import getId from "../utils/getId.js";

// build the class that would belong to the things that has many
export class Book {
  constructor(title, authorId) {
      this.id = getId();
      this.title = title;
      this.authorId = authorId;
  }
}



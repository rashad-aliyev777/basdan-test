
export class Film {
    constructor(title, director, releaseYear, posterPath) {
      this.title = title;
      this.director = director;
      this.releaseYear = releaseYear;
      this.posterPath = posterPath;
    }
  
    getInfo() {
      return `${this.title} (${this.releaseYear}) - Director: ${this.director}`;
    }
  
    getPosterUrl() {
      return `https://image.tmdb.org/t/p/w500${this.posterPath}`;
    }
  }







 


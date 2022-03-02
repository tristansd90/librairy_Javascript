class Book {
    constructor(title, author, synopsis) {
        this.title = title;
        this.author = author;
        this.synopsis = synopsis;
    }
};

class PaperBook extends Book {
    constructor(title, author, synopsis, pages, currentPage) {
        super(title, author, synopsis);
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = this.hasRead();
    }
    hasRead () {
        if (this.currentPage == this.pages){
            return "Livre terminé";
        } else if (this.currentPage == 0) {
            return"livre pas commencé";
        } else if (0 < this.currentPage < this.pages) { 
            return "livre en cours de lecture";
        } else {
            return "erreur ! ce livre ne contient pas ce nombre de pages"
        }
    };

};

class AudioBook extends Book {
    constructor(title, author, synopsis, minutes, currentMinutes, url) {
        super(title, author, synopsis);
        this.minutes = minutes;
        this.currentMinutes = currentMinutes;
        this.url = url;
        this.listen = this.hasListen();
    }
    hasListen() {
        if (this.currentMinutes == this.minutes) {
            return "Livre terminé";
        } else if (this.currentMinutes == 0) {
            return "livre pas commencé";
        } else if (0 < this.currentMinutes < this.minutes) {
            return "livre en cours d'écoute";
        } else {
            return "erreur ! ce livre ne contient pas ce nombre de minutes"
        }
    };
};

const paperBook1 = new PaperBook("Anges et Demons", "Dan Brown", "synopsis...", "467", "0");
const paperBook2 = new PaperBook("Da Vinci Code", "Dan Brown", "synopsis...", "365", "285");
const paperBook3 = new PaperBook("Inferno", "Dan Brown", "synopsis...", "534", "534");

const audioBook1 = new AudioBook("La Semaine de 4 Heures", "Thim Ferriss", "synopsis...", "120", "0");
const audioBook2 = new AudioBook("The Miracle Morning", "Hal Helrod", "synopsis...", "90", "54");
const audioBook3 = new AudioBook("The Miracle Morning", "Hal Helrod", "synopsis...", "90", "90");


console.log(paperBook1);
console.log(paperBook2);
console.log(paperBook3);
console.log(audioBook1);
console.log(audioBook2);
console.log(audioBook3);
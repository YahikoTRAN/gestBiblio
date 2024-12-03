import { Component } from '@angular/core';
import {DataTable} from 'simple-datatables';
import {BookService} from '../services/book.service';
import {Book} from '../model/books.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  books: Book[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  ngAfterViewInit() : void
  {
    setTimeout(() => {
      const table = new DataTable("#productTable", {
        searchable : true,
        perPage : 10,
        perPageSelect : [5,10,20,40],
        labels : {
          placeholder : "Rechercher ...",
          perPage : "produits par page",
          noRows : "Aucun produit trouvé",
          info : "Affichage de {start à {end} sur {rows} produits"
        }
      });
    },100)
  }

}

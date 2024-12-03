import { TestBed } from '@angular/core/testing';
import {Book} from './book.model';
import {BookService} from './test-book-services.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('devrait être créé', () => {
    expect(service).toBeTruthy();
  });

  it('devrait retourner la liste initiale des livres', () => {
    const books = service.getBooks();
    expect(books.length).toBe(1);
    expect(books[0].titre).toBe('Angular Mastery');
  });

  it('devrait ajouter un livre', () => {
    const newBook: Book = { id: 2, titre: 'RxJS Basics', auteur: 'Jane Smith', prix: 25, dateParution: new Date('2023-02-01') };
    service.addBook(newBook);
    const books = service.getBooks();
    expect(books.length).toBe(2);
    expect(books[1].titre).toBe('RxJS Basics');
  });

  it('devrait supprimer un livre par ID', () => {
    service.deleteBook(1);
    const books = service.getBooks();
    expect(books.length).toBe(0);
  });
});

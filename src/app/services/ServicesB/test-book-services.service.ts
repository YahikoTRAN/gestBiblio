import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book} from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksSubject = new BehaviorSubject<Book[]>([
    { id: 1, titre: 'Angular Mastery', auteur: 'John Doe', prix: 30, dateParution: new Date('2023-01-01') },
  ]);

  books$ = this.booksSubject.asObservable();

  getBooks(): Book[] {
    return this.booksSubject.value;
  }

  addBook(book: Book): void {
    const books = this.booksSubject.value;
    this.booksSubject.next([...books, { ...book, id: books.length + 1 }]);
  }

  deleteBook(id: number): void {
    const books = this.booksSubject.value.filter((book) => book.id !== id);
    this.booksSubject.next(books);
  }
}

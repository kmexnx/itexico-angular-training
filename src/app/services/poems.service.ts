import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PoemsService {
  public _selectedAuthor = new Subject();
  private url = 'http://poetrydb.org/';

  constructor(private http: HttpClient) {
  }

  getAuthors() {
    return this.http.get(`${this.url}authors`);
  }

  getPoemsByAuthor(author) {
    return this.http.get(`${this.url}author/${author}`);
  }

  getPoem(poem){
    return this.http.get(`${this.url}title/${poem}`);
  }

  set author(author) {
    this._selectedAuthor.next(author);
  }

  get author() {
    return this._selectedAuthor.asObservable();
  }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WikipediaService {

  private corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  private apiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';

  constructor(private http: HttpClient) { }

  search(term: string): Observable<any> {
    const fullUrl = this.corsAnywhere + this.apiUrl + term + '&utf8=1';
    return this.http.get(fullUrl);
  }
}

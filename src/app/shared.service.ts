import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getHeaderContent() {
    return this.http.get('assets/data/header-content.json');
  }

  getContent() {
    return this.http.get('assets/data/content-data.json');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vraag } from './models/vraag';

@Injectable({
  providedIn: 'root',
})
export class VragenServiceService {
  configUrl = 'localhost';
  constructor(private http: HttpClient) {}

  getVraag() {
    return this.http.get<Vraag>(this.configUrl);
  }
}

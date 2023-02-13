import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lekua } from '../interfaces/lekua';

@Injectable({
  providedIn: 'root'
})
export class LekuakService {

  private url = 'http://localhost:8000/api/lekua';

  constructor(  private http: HttpClient) { }

  getLekuak(){
    return this.http.get<any>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lekua } from '../interfaces/lekua';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LekuakService {

  private url = 'http://localhost:8000/api/lekua';

  constructor(  private http: HttpClient) { }

  getLekuak():Observable<Lekua[]>{
    return this.http.get<Lekua[]>(this.url);
  }
}

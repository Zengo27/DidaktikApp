import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lekua } from '../interfaces/lekua';
import { Observable } from 'rxjs';

import { ApiService} from './api.service';


@Injectable({
  providedIn: 'root'
})
export class LekuakService {

  private url = 'http://localhost:8000/api/lekua';

  constructor(private http: HttpClient,private apiService: ApiService) { }

  getLekuak(forceRefresh: boolean):Observable<Lekua[]>{
    return this.apiService.getData(this.url,forceRefresh);
  }
}

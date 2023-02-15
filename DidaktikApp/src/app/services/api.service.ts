import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lekua } from '../interfaces/lekua';
import { delay, from, Observable, of, switchMap, tap } from 'rxjs';
import { CachingService } from './caching.service';
import { NetworkService } from './network.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private toastController: ToastController, private cachingService: CachingService, private networkService: NetworkService) { }

  public getData(url, forceRefresh = false): Observable<any> {
    // Handle offline case
    if (!this.networkService.getStatus()) {
      this.toastController.create({
        message: 'You are viewing offline data.',
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      return from(this.cachingService.getCachedRequest(url));
    }

    // Handle connected case
    if (forceRefresh) {
      // Make a new API call
      return this.callAndCache(url);
    } else {
      // Check if we have cached data
      const storedValue = from(this.cachingService.getCachedRequest(url));
      return storedValue.pipe(switchMap(result => {
        if (!result) {
          // Perform a new request since we have no data
          return this.callAndCache
            (url);
        } else {
          // Return cached data
          return of(result);
        }
      })
      );
    }
  }
  
  private callAndCache
    (url): Observable<any> {
    return this.http.get(url).pipe(delay(2000), // Only for testing
      tap(res => {
        // Store our new data
        this.cachingService.cacheRequest(url, res);
      })
    );
  }
}


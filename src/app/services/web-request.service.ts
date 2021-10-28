import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(private http:HttpClient) {
    this.ROOT_URL='http://localhost:3000'
   }


   get(url:string)//for bonos
   {
     return this.http.get(`$(this.ROOT_URL)/$(url)`);
   }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Monsterdetail } from '../Model/monsterdetail';

const Base_Url = "https://jsonplaceholder.typicode.com";
const Base_Image_Url="https://robohash.org/"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any>{
    return this.http.get(`${Base_Url}/${url}`);
  }

  getImage(id: number):Observable<Blob>{
    return this.http.get(`${Base_Image_Url}${id}?set=set2&size=180x180`, {responseType: 'blob'});
  }
}

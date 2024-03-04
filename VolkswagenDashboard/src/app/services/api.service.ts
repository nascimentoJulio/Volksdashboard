import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'https://aula-dotnet-cars.onrender.com'
  constructor(private http: HttpClient) { }

  getCars(): Observable<HttpResponse<Car[]>> {
    return this.http.get<any>(`${this.BASE_URL}/api/car`, { observe: 'response' });
  }

  
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ApiUrl = environment.API_URL
  constructor(private http: HttpClient) { }
  GetProducts(): any {
    return this.http.get(`${this.ApiUrl}/products`)
  }
}

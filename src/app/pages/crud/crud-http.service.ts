import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ListSurveyComponent } from '../pages/list-survey/list-survey.component';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  
  apiUrl: string = 'http://localhost:3000/surveys';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  //Create
  create(survey: any): Observable<any> {
    let API_URL = `${this.apiUrl}`;
    return this.http.post(API_URL, survey);
  }

  // Read
  list() {
    return this.http.get(`${this.apiUrl}`);
  }

  listById(id: any):any {
    let API_URL = `${this.apiUrl}/${id}`;

    return this.http.get<any[]>(API_URL);
  }

  // Update
  update(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;

    return this.http.put(API_URL, data, { headers: this.headers });
  }

  // Delete
  delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/${id}`;

    return this.http.delete(API_URL);
  }
}

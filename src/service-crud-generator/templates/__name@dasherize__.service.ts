import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { removeNullAndUndefinedProperties } from './service.utils';
import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';

const API_URL = '/api/<%= dasherize(name) %>';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {

  constructor(private http: HttpClient) { }

  get<%= classify(name) %>All(): Observable<<%= classify(name) %>[]> {
    return this.http.get<<%= classify(name) %>[]>(API_URL);
  }

  get<%= classify(name) %>ById(id: number): Observable<<%= classify(name) %>> {
    return this.http.get<<%= classify(name) %>>(API_URL);
  }

  save<%= classify(name) %>(<%= camelize(name) %>: <%= classify(name) %>): Observable<any> {
    return this.http.post<any>(API_URL, <%= camelize(name) %>);
  }

  update<%= classify(name) %>(<%= camelize(name) %>: <%= classify(name) %>) : Observable<any> {
    return this.http.put<any>(`${API_URL}/${<%= camelize(name) %>.id}`, <%= camelize(name) %>);
  }

  delete<%= classify(name) %>(<%= camelize(name) %>: <%= classify(name) %>) : Observable<any> {
    return this.http.delete<any>(`${API_URL}/${<%= camelize(name) %>.id}`);
  }

  get<%= classify(name) %>ByQueryparamObject(queryParamObj) {
    const fromObject = removeNullAndUndefinedProperties(queryParamObj);

    const params = new HttpParams({ fromObject });

    return this.http.get<<%= classify(name) %>[]>(API_URL, { params });
  }
}

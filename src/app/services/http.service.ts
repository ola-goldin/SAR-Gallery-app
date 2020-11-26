import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import {  Post } from '../models/models';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

const urlBase = 'https://jsonplaceholder.typicode.com/'

@Injectable({providedIn:'root'})

export class HttpService {
  constructor(private http: HttpClient) {}

  public cache = new Map<string, Observable<any> >();

  get(url:string, limit:number):Observable<any>{
      return this.http.get<any>(`${urlBase}${url}?_limit=${limit}`)
  }

  add(body:Post, path:string):Observable<any>{
    return this.http.post<any>(`${urlBase}${path}`, body)
  }

  update(body:Post, path:string):Observable<any>{
    return this.http.put<any>(`${urlBase}${path}/${body.id}`,body)
  }
  delete(id:number, path:string):Observable<Post>{
    return this.http.delete<any>(`${urlBase}${path}/${id}`)
  }
}
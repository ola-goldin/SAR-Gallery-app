import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Photo, Post } from '../models';
import { forkJoin, Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { HttpService } from './http.service';
import { mergeAll, mergeMap } from 'rxjs/operators';

const  defaultLimit = 30;

@Injectable({providedIn:'root'})


export class ResolverService implements Resolve<Observable<any>> {

  constructor(private http: HttpService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        if(route.routeConfig.path==='home')
           return forkJoin({posts:this.http.get('posts', 10),photos:this.http.get('photos', 10) }) 
        return this.http.get(route.routeConfig.path, defaultLimit)
    }

}
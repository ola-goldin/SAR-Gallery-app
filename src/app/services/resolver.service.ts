import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Photo, Post } from '../models/models';
import { forkJoin, Observable, of } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { HttpService } from './http.service';
import { map, mergeAll, mergeMap, takeUntil } from 'rxjs/operators';

const  defaultLimit = 30;

  enum Paths{
  home= 'home',
  posts='posts',
  photos='photos'
}

@Injectable({providedIn:'root'})

export class ResolverService implements Resolve<Observable<any>> {

  constructor(private http: HttpService) {}
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
   //simple cache
        if(route.routeConfig.path===Paths.home){
          if (!this.http.cache.has(Paths.photos) && !this.http.cache.has(Paths.posts)){
            this.http.cache.set(Paths.photos,this.http.get(Paths.photos, defaultLimit))
            this.http.cache.set(Paths.posts,this.http.get(Paths.posts, defaultLimit))
          }

           return forkJoin({posts:this.http.cache.get(Paths.posts)
            ,photos:this.http.cache.get(Paths.photos) }) 
        }
        if (!this.http.cache.has(route.routeConfig.path))
          this.http.cache.set(route.routeConfig.path,this.http.get(route.routeConfig.path, defaultLimit))

        return this.http.cache.get(route.routeConfig.path) ?? this.http.get(route.routeConfig.path, defaultLimit)
    }
}
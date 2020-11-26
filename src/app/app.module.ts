import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactUsComponent } from './components/contact-us/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ContactFormComponent } from './components/contact-us/contact-form/contact-form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormDialog } from './components/posts/post-form/form.component';
import { LinksComponent } from './layout/router-links/router-lincs.component';
import { NavMainComponent } from './layout/nav-main/nav-main.component';
import { MaterialModule } from './modules/material.module';
import { ColourByRouteLibModule } from 'projects/colour-by-route-lib/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PostsComponent,
    ContactUsComponent,
    HomeComponent,
    ContactFormComponent,
    NavMainComponent,
    LinksComponent,
    FormDialog,
   // ColurByRouteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColourByRouteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

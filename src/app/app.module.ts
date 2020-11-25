import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './components/posts/posts/posts.component';
import { ContactUsComponent } from './components/contact-us/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home/home.component';
import { ContactFormComponent } from './components/contact-us/contact-form/contact-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMainComponent } from './layout/nav-main/nav-main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormDialog } from './components/posts/posts/post-form/form.component';
import { LinksComponent } from './layout/router-links/router-lincs.component.ts/router-lincs.component';

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
    FormDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

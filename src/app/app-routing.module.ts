import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home/home.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { ResolverService } from './services/resolver.service';

const routes: Routes = [  {path:'', redirectTo:'home', pathMatch:'full'},
{path:'home', component:HomeComponent, resolve:{data:ResolverService}},
{path:'posts', component:PostsComponent, resolve:{posts:ResolverService}},
{path:'photos', component:GalleryComponent, resolve:{photos:ResolverService}},
{path:'contact', component:ContactUsComponent},
{path:'**', redirectTo:'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { Post } from 'src/app/models/models';
import { HttpService } from 'src/app/services/http.service';
import { FormDialog } from './post-form/form.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  private store = new BehaviorSubject<Post[]>(null);
  data: Observable<Post[]> = this.store.asObservable();
  showButtons: boolean;
  @Input('limit') limit: number;
  @Input('customTitle') customTitle: string;

  constructor(private route: ActivatedRoute, private httpService: HttpService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showButtons = this.route.snapshot.routeConfig.path === 'home' ? false : true;
    const arr = this.route.snapshot.data.data?.posts ?? [...this.route.snapshot.data.posts];
    this.store.next(arr);
  }

  update(post: Post) {
    const dialogRef = this.openDialog(post,"Edit");
    dialogRef.afterClosed().subscribe(({title, text}) => {
      post.title = title;
      post.body =  text;
      this.httpService.update(post, this.route.snapshot.routeConfig.path).subscribe(res=>{
        const copy = this.store.getValue();
        let idx = copy.findIndex(i => i.id === post.id);
        copy[idx] = post;
        this.httpService.cache.set(this.route.snapshot.routeConfig.path,of(copy))
        this.store.next(copy)
      },error => {
        alert("Error occured"
        )
      })
     
    });

  }

  add() {
    let post:Post={title:'', userId:0, id:0, body:''}
    const dialogRef = this.openDialog(post, "Add");
    dialogRef.afterClosed().subscribe(({title, text}) => {
      post.title = title;
      post.body =  text;
      const copy = this.store.getValue();
      post.id = copy[copy.length-1].id +1;
      const added = [{...post},...copy ]
      this.store.next(added)
      this.httpService.cache.set(this.route.snapshot.routeConfig.path,of(added))
    });
  }

  delete(post: Post) {
    const copy = this.store.getValue();
    this.httpService.delete(post.id, this.route.snapshot.routeConfig.path).subscribe(
      res => {
        let idx = copy.findIndex(i => i === post);
        copy.splice(idx, 1)
        this.store.next(copy)
        this.httpService.cache.set(this.route.snapshot.routeConfig.path,of(copy))
      },
      error => {
        alert("Error occured"
        )
      }
    );
  }

  private openDialog(post: Post, title:string):MatDialogRef<FormDialog,any> {
    return this.dialog.open(FormDialog, {
      width: '400px',
      data: { post: post, title: title }
    });
  }

  
}

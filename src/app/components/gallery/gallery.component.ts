import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/models/models';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input('limit') limit: number;
  @Input('customTitle') customTitle:string;
  
  data: Observable<Photo[]> = of([]);
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const arr = this.route.snapshot.data.data?.photos??[...this.route.snapshot.data.photos];
    this.data = of(arr );
  }

}

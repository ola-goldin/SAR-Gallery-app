import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  limit:number = 10;
  customTitle = `top ${this.limit}`
  data = null;
  
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.data = this.route.snapshot.data;
  }

}

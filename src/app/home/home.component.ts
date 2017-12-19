import { Component, OnInit } from '@angular/core';

import { PostComponent } from '../post/post.component';
import { DareListComponent } from '../dare-list/dare-list.component';
import { HomeService } from './home.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  postList: any[];

  constructor(private _homeService: HomeService) {
  }

  ngOnInit() {
    this.postList = this._homeService.getPosts();
  }

}

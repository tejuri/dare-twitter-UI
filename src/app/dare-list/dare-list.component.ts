import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dare-list-box',
  templateUrl: './dare-list.component.html',
  styleUrls: ['./dare-list.component.css']
})
export class DareListComponent implements OnInit {
  dareList: any[];

  constructor() { 
    this.dareList = [
      "Ice Bucket Challenge",
      "Blind Superman",
      "Dare to Dare",
      "The floor is lava",
      "Dubsmash Challenge"
    ];
  }

  ngOnInit() {
  }

}

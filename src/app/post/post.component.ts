import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-box',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: {
    title: string,
    subtitle: string,
    isImage: boolean,
    imageUrl: string,
    isVideo: boolean,
    videoUrl: string,
    content: string
  }

  constructor() { }

  ngOnInit() {
  }

}

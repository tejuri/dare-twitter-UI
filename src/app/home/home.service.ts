import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor() {}

  getPosts() {
    return [
      {
        title: "First Post",
        subtitle: "The very first one",
        isImage: true,
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Second Post",
        subtitle: "The very second one",
        isImage: false,
        imageUrl: "",
        isVideo: false,
        videoUrl: "https://s3.amazonaws.com/tanmay-bucket-edp/mukul/sample2.mp4",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Third Post",
        subtitle: "The very third one",
        isImage: false,
        imageUrl: "",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Fourth Post",
        subtitle: "The very fourth one",
        isImage: false,
        imageUrl: "",
        isVideo: true,
        videoUrl: "https://s3.amazonaws.com/tanmay-bucket-edp/mukul/sample2.mp4",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Fifth Post",
        subtitle: "The very fifth one",
        isImage: true,
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Sixth Post",
        subtitle: "The very sixth one",
        isImage: false,
        imageUrl: "",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      }
    ];
  }

}
import { Component, OnInit } from "@angular/core";
import { Data, ImagesService } from "../images.service";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"]
})
export class ImgComponent implements OnInit {
  index: number = 0;
  images: Data[];
  link: string = "";
  constructor(private service: ImagesService) {
    // console.log(this.images[this.index]);
  }

  ngDoCheck() {}
  left() {
    this.index--;
    // this.index = this.index == 0 ? this.images.length - 1 : this.index--;
  }
  right() {
    this.index++;
    // this.index = this.index == this.images.length - 1 ? 0 : this.index++;
  }
  ngOnInit() {
    this.service.getImg().subscribe(data => {
      this.index = this.service.index;
      this.images = data;
      this.link = this.images[this.index].link;
    });
    // this.index = this.service.index;

    //console.log(this.images[this.index]);
  }
}

import { Component, OnInit } from "@angular/core";
import { ImagesService } from "../images.service";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"]
})
export class ImgComponent implements OnInit {
  index: number = 0;
  link: string = "";
  constructor(private service: ImagesService) { }

  ngDoCheck() { }
  left() { this.index--; }
  right() {
    this.index++;
    // TODO: Remove debugging when done
    // this.index = this.index == this.images.length - 1 ? 0 : this.index++;
  }
  ngOnInit() {
  }

  getImageUrl() {
    // TODO: Discuss hierarchy of resource
    // this.service.getImageUrl(this.index).subscribe(data => this.link = data[this.index].link);
  }
}

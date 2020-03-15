import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Data, ImagesService } from "../images.service";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"]
})
export class ImgComponent implements OnInit {
  index: number = 0;
  images: Data[];
  constructor(private route: ActivatedRoute, private service: ImagesService) {}

  ngDoCheck() {
    // let i = parseInt(this.route.snapshot.paramMap.get("index"));
    // this.index = i;
  }
  left() {
    this.index--;
  }
  right() {
    this.index++;
  }
  ngOnInit() {
    this.service.getImg().subscribe(data => (this.images = data));
    this.index = this.service.index;
  }
}

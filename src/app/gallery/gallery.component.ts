import { Component, OnInit } from "@angular/core";
import { ImagesService, Data } from "../images.service";
import { MatDialog } from "@angular/material/dialog";
import { ImgComponent } from "../img/img.component";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  images: Data[];
  allImages: Data[];
  i: number = -1;
  index: number;

  constructor(private service: ImagesService, public dialog: MatDialog) {}

  openDialog(): void {
    this.service.index = this.index;
    this.dialog.open(ImgComponent);
  }
  scrollDown() {
    let nextSix: Data[];
    if (this.allImages.length < this.i + 7) {
      nextSix = this.allImages.slice(this.i + 1, this.allImages.length);
    } else {
      nextSix = this.allImages.slice(this.i + 1, this.i + 7);
    }
    this.images = this.images.concat(nextSix);
    console.log(this.images);
    this.i += 6;
  }

  ngOnInit() {
    this.service.getImg().subscribe(data => {
      this.allImages = data;
      this.images = this.allImages.slice(this.i + 1, this.i + 7);
      this.i += 6;
    });
  }

  // ngDoCheck() {
  //   console.log(this.images);
  // }
  // ngOnDestroy() {
  //   console.log("destroy");
  // }
}

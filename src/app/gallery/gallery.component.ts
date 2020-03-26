import { Component, OnInit } from "@angular/core";
import { ImagesService } from "../images.service";
import { MatDialog } from "@angular/material/dialog";
import { ImgComponent } from "../img/img.component";
import { IPictureDetails } from "../app.interface";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  page: number = 1;
  // TODO: Discuss variable name
  // i: number = -1;
  index: number;
  images: IPictureDetails[] = [];

  constructor(private service: ImagesService, public dialog: MatDialog) { }

  openDialog(index): void {
    this.dialog.open(ImgComponent);
  }

  // TODO: Why is scrolled Down not called
  scrollDown() {
    this.getImagesPage();
  }

  ngOnInit() {
    // TODO: Discuss why we are calling function / abstraction for calling same
    // subscribe again and again
    this.getImagesPage();
  }

  getImagesPage() {
    this.service.getDisplayImages(this.page).subscribe(data => this.images.push(...data));
    this.page++;
  }
}

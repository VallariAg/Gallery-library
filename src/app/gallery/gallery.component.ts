import { Component, OnInit } from "@angular/core";
import { ImagesService } from "../images.service";
import { MatDialog } from "@angular/material/dialog";
import { ImgComponent } from "../img/img.component";
import { IPictureDetails } from "../app.interface";
import { CompileTemplateMetadata } from "@angular/compiler";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  page: number = 1;
  images: IPictureDetails[] = [];

  constructor(private service: ImagesService, public dialog: MatDialog) {}

  openDialog(ImageLink: string): void {
    this.dialog.open(ImgComponent, {
      data: { ImageLink: ImageLink },
    });
  }

  scrollDown() {
    this.getImagesPage();
  }

  ngOnInit() {
    // TODO: Discuss why we are calling function / abstraction for calling same
    // subscribe again and again
    this.getImagesPage();
  }

  getImagesPage() {
    let getImages = this.service
      .getDisplayImages(this.page)
      .subscribe((data) => {
        // called everytime we scroll -> needs to stop when all images are loaded
        // max pages = 2 here, should not exceed that
        if (data.length < 12) {
          console.log(data.length);
          getImages.unsubscribe();
        }
        this.images.push(...data);
      });
    this.page++;
  }
}

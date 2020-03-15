import { Component, OnInit } from "@angular/core";
import { ImagesService, Data } from "../images.service";
import { MatDialog } from "@angular/material/dialog";
import { ImgComponent } from "../img/img.component";
import { Router } from "@angular/router";
// import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  images: Data[];
  cols: number = 3;
  index: number;
  hoverOn: boolean = false;
  constructor(
    private service: ImagesService,
    public dialog: MatDialog,
    private route: Router
  ) {
    // this.images = service.getImg();
    // console.log(this.images);
  }

  openDialog(): void {
    this.service.index = this.index;
    let dialogRef = this.dialog.open(ImgComponent);
    // this.route.navigate(["/img", this.index]);
  }
  showPopover = () => (this.hoverOn = true);
  hidePopover = () => (this.hoverOn = false);
  ngOnInit() {
    this.service.getImg().subscribe(data => (this.images = data));
  }
}

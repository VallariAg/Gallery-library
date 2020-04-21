import { Component, Inject } from "@angular/core";

import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"],
})
export class ImgComponent {
  link: string;
  constructor(@Inject(MAT_DIALOG_DATA) private data) {
    this.link = data.ImageLink;
  }

  ngOnInit() {}
}

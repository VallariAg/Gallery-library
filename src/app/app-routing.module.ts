import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ImgComponent } from "./img/img.component";
import { GalleryComponent } from "./gallery/gallery.component";

const routes: Routes = [
  { path: "img/:index", component: ImgComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "", component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

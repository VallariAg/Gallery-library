import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
//Components
import { AppComponent } from "./app.component";
import { ImgComponent } from "./img/img.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ImagesService } from "./images.service";

// Angular Material Imports
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [AppComponent, GalleryComponent, ImgComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    HttpClientModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    LayoutModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent],
  entryComponents: [ImgComponent]
})
export class AppModule {}

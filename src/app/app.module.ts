import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
//Components
import { AppComponent } from "./app.component";
import { ImgComponent } from "./img/img.component";
import { HeaderComponent } from "./header/header.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ImagesService } from "./images.service";

// Angular Material Imports
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, HeaderComponent, GalleryComponent, ImgComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

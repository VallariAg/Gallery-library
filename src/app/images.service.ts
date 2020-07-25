import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { IPictureDetails } from "./app.interface";

@Injectable({
  providedIn: "root",
})
export class ImagesService {
  private pageSize = 12;
  private baseurl = "http://localhost:2700/api/";
  private jsonPath = "./assets/data/";
  private jsonHttpheaders = new HttpHeaders({
    "Content-type": "application/json",
  });
  private pathToImages = './assets/images/'
  constructor(private http: HttpClient) { }


  getDisplayImages(page: number): Observable<IPictureDetails[]> {
    const path = "images?page=" + page;

    return this.http
      .get<IPictureDetails[]>(this.baseurl + path, {
        headers: this.jsonHttpheaders,
      })
      .pipe(
        map((data) => {

          let backupData: IPictureDetails[] = data;
          backupData.forEach((pictureDetail) => {
            pictureDetail.link = this.pathToImages + pictureDetail.link;
          })
          return backupData;

        }),
        catchError((error) => {
          console.error(error);
          return this.http
            .get<IPictureDetails[]>(this.jsonPath + "images.json")
            .pipe(
              map((data) => {
                let backupData: IPictureDetails[] = [];
                let imagesLoaded = (page - 1) * this.pageSize;
                for (
                  let imageNumber = 1;
                  imageNumber <= this.pageSize;
                  imageNumber++
                ) {
                  const nextImage = data[imagesLoaded + imageNumber];
                  if (nextImage === undefined) {
                    break;
                  }
                  backupData.push(nextImage);
                }
                return backupData;
              })
            );
        })
      );
  }
}




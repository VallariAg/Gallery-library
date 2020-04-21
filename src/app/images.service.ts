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
  private baseurl = "http://myserver.url/";
  private jsonPath = "./assets/data/";
  private jsonHttpheaders = new HttpHeaders({
    "Content-type": "application/json",
  });
  constructor(private http: HttpClient) {}

  getDisplayImages(page: number): Observable<IPictureDetails[]> {
    const path = "images?page=" + page;
    return this.http
      .get<IPictureDetails[]>(this.baseurl + path, {
        headers: this.jsonHttpheaders,
      })
      .pipe(
        catchError((error) => {
          // console.error(error);
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

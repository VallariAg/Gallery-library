import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Data {
  name: string;
  link: string;
  description: string;
  creator: string;
  licence: string;
  download: Object;
}

@Injectable({
  providedIn: "root"
})
export class ImagesService {
  data: Data[];
  index: number;

  private _url: string = "/assets/images.json";
  getImg(): Observable<Data[]> {
    return this.http.get<Data[]>(this._url);
  }
  constructor(private http: HttpClient) {}
}

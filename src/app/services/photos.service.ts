import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Photo} from "../model/photo";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  endpoint = '';
  mockPhoto = {
    img: "Mock Image"
  }

  constructor(
    private http: HttpClient
  ) { }

  getPhotos() {
    return this.http.get<Photo[]>(this.endpoint).pipe(
      map((photos: Photo[]) => {
        if (photos.length == 0) {
          return [this.mockPhoto];
        }
        return photos;
      })
    );
  }
}

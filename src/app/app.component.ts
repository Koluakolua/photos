import { Component } from '@angular/core';
import { photos } from "../assets/mock-photos";
import {Photo} from "./model/photo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Photo[] = photos;
}

import {Component, Input, OnChanges} from '@angular/core';
import {Photo} from "../model/photo";
import {Direction} from "../model/direction";

@Component({
  selector: 'app-photo-carousel[photos]',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.css']
})
export class PhotoCarouselComponent implements OnChanges {
  @Input()
  photos!: Photo[];
  currentPhoto: number = 0;

  constructor() { }

  ngOnChanges(): void {
    this.currentPhoto = 0;
  }

  onArrowClick(direction: Direction) {
    if (!this.canSwipe(direction)) {
      return;
    }
    switch (direction) {
      case "left":
        this.currentPhoto --;
        break;
      case "right":
        this.currentPhoto ++;
        break;
    }
  }

  canSwipe(direction: Direction) {
    switch (direction) {
      case "left":
        if (this.currentPhoto != 0) {
          return true;
        }
        break;
      case "right":
        if (this.currentPhoto != this.photos.length - 1) {
          return true;
        }
        break;
    }
    return false;
  }
}

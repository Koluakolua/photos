import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

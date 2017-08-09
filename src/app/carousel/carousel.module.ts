import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainCarouselComponent } from './main-carousel.component';
import { SecondaryCarouselComponent } from './secondary-carousel.component';

@NgModule({
  declarations: [
    MainCarouselComponent,
    SecondaryCarouselComponent
  ],
  exports: [
    MainCarouselComponent,
    SecondaryCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class CarouselModule {
}

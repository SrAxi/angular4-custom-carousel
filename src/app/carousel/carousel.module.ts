import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainCarouselComponent } from './main-carousel.component';

@NgModule({
  declarations: [
    MainCarouselComponent
  ],
  exports: [MainCarouselComponent],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class CarouselModule {
}

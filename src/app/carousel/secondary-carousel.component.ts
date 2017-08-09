import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-secondary-carousel',
  templateUrl: './secondary-carousel.component.html'
})
export class SecondaryCarouselComponent implements OnInit {
  // slides array to fill the carousel
  slides: any[];

  // error handler
  apiError = {
    error: false,
    msg: ''
  };

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.fetch('../../assets/api/secondary-data.json').subscribe(
      (slides) => {
        // We fill our slides array with the data retrieved
        this.slides = slides;

      },
      (err) => {
        this.apiError.error = true;
        this.apiError.msg = err;
      }
    );
  }
}

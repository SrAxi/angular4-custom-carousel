import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ApiService } from '../shared/api/api.service';
import { SecondaryCarouselComponent } from './secondary-carousel.component';

describe('SecondaryCarouselComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SecondaryCarouselComponent
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [ApiService]
    }).compileComponents();
  }));

  it('should create SecondaryCarouselComponent', async(() => {
    const fixture = TestBed.createComponent(SecondaryCarouselComponent);
    const secondaryCarouselComponent = fixture.debugElement.componentInstance;
    expect(secondaryCarouselComponent).toBeTruthy();
  }));

  it(`should not have an API call error`, async(() => {
    const fixture = TestBed.createComponent(SecondaryCarouselComponent);
    const secondaryCarouselComponent = fixture.debugElement.componentInstance;
    expect(secondaryCarouselComponent.apiError.error).toEqual(false);
  }));
});

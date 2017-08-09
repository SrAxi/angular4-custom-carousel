import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MainCarouselComponent } from './main-carousel.component';
import { ApiService } from '../shared/api/api.service';

describe('MainCarouselComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainCarouselComponent
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [ApiService]
    }).compileComponents();
  }));

  it('should create MainCarouselComponent', async(() => {
    const fixture = TestBed.createComponent(MainCarouselComponent);
    const mainCarouselComponent = fixture.debugElement.componentInstance;
    expect(mainCarouselComponent).toBeTruthy();
  }));

  it('should have first slide as default parameter', async(() => {
    const fixture = TestBed.createComponent(MainCarouselComponent);
    const mainCarouselComponent = fixture.debugElement.componentInstance;
    expect(mainCarouselComponent.slideIndex).toEqual(1);
  }));
});

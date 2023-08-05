import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCarouselComponent } from './photo-carousel.component';

describe('PhotoCarouselComponent', () => {
  let component: PhotoCarouselComponent;
  let fixture: ComponentFixture<PhotoCarouselComponent>;
  const photos = [
    {
      img: 'Image 1'
    },
    {
      img: 'Image 2'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCarouselComponent);
    component = fixture.componentInstance;

    component.photos = photos;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('0th photo shouldn`t swipe left', () => {
    component.onArrowClick("left");
    expect(component.currentPhoto).toEqual(0);
  });

  it('last photo shouldn`t swipe right', () => {
    for (let i = 0; i < component.photos.length - 1; i++) {
      component.onArrowClick("right")
    }
    expect(component.currentPhoto).toEqual(component.photos.length - 1);

    component.onArrowClick("right")
    expect(component.currentPhoto).toEqual(component.photos.length - 1);
  });
});

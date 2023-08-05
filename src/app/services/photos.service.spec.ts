import { TestBed } from '@angular/core/testing';
import { PhotosService } from './photos.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('PhotosService', () => {
  let photoService: PhotosService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        PhotosService,
        {provide: HttpClient, useValue: httpSpy}
      ]
    });
    photoService = TestBed.inject(PhotosService);
    httpClient = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(photoService).toBeTruthy();
  });

  it('should receive images', (done) => {
    httpClient.get.and.returnValue(of([
      {
        img: 'Image 1'
      }
    ]));

    photoService.getPhotos().subscribe(data => {
      expect(data[0].img).toBe('Image 1');
      done();
    })
  });

  it('should receive mock image', (done) => {
    httpClient.get.and.returnValue(of([]));

    photoService.getPhotos().subscribe(data => {
      expect(data[0].img).toBe('Mock Image');
      done();
    })
  });
});

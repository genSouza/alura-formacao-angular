import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PhotoBoardService } from './photo-board.service';

describe(PhotoBoardService.name, () => {
  beforeEach(async () => {
    let service: PhotoBoardService;
    let httpController: HttpTestingController;

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    }).compileComponents();

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });
});

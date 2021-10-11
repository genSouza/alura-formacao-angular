import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interfaces/photo';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  public photos: Photo[] = [];

  constructor(private service: PhotoBoardService) {}

  ngOnInit(): void {
    this.service
      .getPhotos()
      .pipe(take(1))
      .subscribe((res) => {
        this.photos = res;
      });
  }
}

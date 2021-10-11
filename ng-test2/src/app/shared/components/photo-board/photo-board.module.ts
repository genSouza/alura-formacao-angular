import { PhotoFrameModule } from './../photo-frame/photo-frame.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardService } from './services/photo-board.service';

@NgModule({
  declarations: [PhotoBoardComponent],
  providers: [PhotoBoardService],
  imports: [CommonModule, PhotoFrameModule],
  exports: [PhotoBoardComponent],
})
export class PhotoBoardModule {}

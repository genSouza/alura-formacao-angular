import { MessageModule } from './../components/message/message.module';
import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { GridAnimalsPhotoComponent } from './grid-animals-photo/grid-animals-photo.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    GridAnimalsPhotoComponent,
    AnimalDetailComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    MessageModule,
    ReactiveFormsModule,
  ],
})
export class AnimalsModule {}

import { SharedModule } from './../shared/shared.module';
import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { GridAnimalsPhotoComponent } from './grid-animals-photo/grid-animals-photo.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    GridAnimalsPhotoComponent,
    AnimalDetailComponent,
    CommentsComponent,
    NewAnimalComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, CardModule, SharedModule],
})
export class AnimalsModule {}

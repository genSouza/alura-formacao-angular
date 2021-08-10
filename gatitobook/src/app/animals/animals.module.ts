import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { GridAnimalsPhotoComponent } from './grid-animals-photo/grid-animals-photo.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    GridAnimalsPhotoComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule

  ]
})
export class AnimalsModule { }

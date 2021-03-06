import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AnimalsListResolver } from './animals-list/animals-list.resolver';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
    resolve: {
      animals: AnimalsListResolver,
    },
  },
  {
    path: 'novo',
    component: NewAnimalComponent,
  },
  {
    path: ':animalId',
    component: AnimalDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}

import { switchMap } from 'rxjs/operators';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { Animals } from './../animals';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
})
export class AnimalsListComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animals = this.activatedRoute.snapshot.data['animals'];
    });
  }
}

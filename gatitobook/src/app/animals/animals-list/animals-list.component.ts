import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { Animals } from './../animals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
})
export class AnimalsListComponent implements OnInit {
  animals!: Animals;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      const userName = user.name ?? '';
      this.animalsService.userList(userName).subscribe((animals) => {
        this.animals = animals;
      });
    });
  }
}

import { switchMap } from 'rxjs/operators';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { Animals } from './../animals';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
})
export class AnimalsListComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.getUser().pipe(switchMap((user)=>{
      const userName = user.name ?? '';
      return this.animalsService.userList(userName);
    }));

  }
}

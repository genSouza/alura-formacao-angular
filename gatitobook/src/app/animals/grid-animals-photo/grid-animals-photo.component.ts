import { Animals } from './../animals';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-animals-photo',
  templateUrl: './grid-animals-photo.component.html',
  styleUrls: ['./grid-animals-photo.component.css']
})
export class GridAnimalsPhotoComponent implements OnInit {

  @Input()
  animals!: Animals;

  constructor() { }

  ngOnInit(): void {
  }

}

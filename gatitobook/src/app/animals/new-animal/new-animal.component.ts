import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css'],
})
export class NewAnimalComponent implements OnInit {
  animalForm!: FormGroup;
  file!: File;
  preview!: string;
  uploadComplete = 0;

  constructor() {}

  ngOnInit(): void {}

  upload() {
    console.log('foo');
  }

  saveFile(file: any) {}
}

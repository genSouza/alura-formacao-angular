import { AnimalsService } from './../animals.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

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

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;
    const description = this.animalForm.get('description')?.value ?? '';
    this.animalsService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() => {
          this.router.navigate(['animais']);
        })
      )
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type == HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.uploadComplete = Math.round(100 * (event.loaded / total));
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  saveFile(file: any): void {
    const [fileToSave] = file?.files;
    this.file = fileToSave;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(fileToSave);
  }
}

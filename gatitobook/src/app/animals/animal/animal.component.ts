import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';

const API: string = environment.apiUrl;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  @Input()
  set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  @Input()
  description: string = '';
  @Input()
  alt: string = '';

  get url(): string {
    return this.urlOriginal;
  }

  private urlOriginal = '';

  constructor() {}

  ngOnInit(): void {}
}

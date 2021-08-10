import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAnimalsPhotoComponent } from './grid-animals-photo.component';

describe('GridAnimalsPhotoComponent', () => {
  let component: GridAnimalsPhotoComponent;
  let fixture: ComponentFixture<GridAnimalsPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAnimalsPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAnimalsPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

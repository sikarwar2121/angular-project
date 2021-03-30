import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadroductComponent } from './uploadroduct.component';

describe('UploadroductComponent', () => {
  let component: UploadroductComponent;
  let fixture: ComponentFixture<UploadroductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadroductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadroductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

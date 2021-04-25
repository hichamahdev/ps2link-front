import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCarteComponent } from './ajout-carte.component';

describe('AjoutCarteComponent', () => {
  let component: AjoutCarteComponent;
  let fixture: ComponentFixture<AjoutCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

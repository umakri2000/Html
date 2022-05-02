import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmlpoyeeFormComponent } from './emlpoyee-form.component';

describe('EmlpoyeeFormComponent', () => {
  let component: EmlpoyeeFormComponent;
  let fixture: ComponentFixture<EmlpoyeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmlpoyeeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmlpoyeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

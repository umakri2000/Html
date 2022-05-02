import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatLogComponent } from './cat-log.component';

describe('CatLogComponent', () => {
  let component: CatLogComponent;
  let fixture: ComponentFixture<CatLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

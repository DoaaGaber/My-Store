import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulPageComponent } from './sucessful-page.component';

describe('SucessfulPageComponent', () => {
  let component: SucessfulPageComponent;
  let fixture: ComponentFixture<SucessfulPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessfulPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessfulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

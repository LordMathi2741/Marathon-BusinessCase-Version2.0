import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHomePageComponent } from './the-home-page.component';

describe('TheHomePageComponent', () => {
  let component: TheHomePageComponent;
  let fixture: ComponentFixture<TheHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

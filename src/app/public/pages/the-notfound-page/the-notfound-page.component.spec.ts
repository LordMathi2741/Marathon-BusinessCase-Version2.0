import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNotfoundPageComponent } from './the-notfound-page.component';

describe('TheNotfoundPageComponent', () => {
  let component: TheNotfoundPageComponent;
  let fixture: ComponentFixture<TheNotfoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheNotfoundPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheNotfoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

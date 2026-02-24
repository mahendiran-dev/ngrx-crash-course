import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPreApiCallComponent } from './cancel-pre-api-call.component';

describe('CancelPreApiCallComponent', () => {
  let component: CancelPreApiCallComponent;
  let fixture: ComponentFixture<CancelPreApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelPreApiCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelPreApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

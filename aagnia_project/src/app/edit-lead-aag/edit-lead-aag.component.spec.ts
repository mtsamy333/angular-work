import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeadAagComponent } from './edit-lead-aag.component';

describe('EditLeadAagComponent', () => {
  let component: EditLeadAagComponent;
  let fixture: ComponentFixture<EditLeadAagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeadAagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLeadAagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

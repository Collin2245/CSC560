import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHolderComponent } from './api-holder.component';

describe('ApiHolderComponent', () => {
  let component: ApiHolderComponent;
  let fixture: ComponentFixture<ApiHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

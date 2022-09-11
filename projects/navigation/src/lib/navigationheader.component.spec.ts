import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHeaderComponent } from './navigationheader.component';

describe('NavigationComponent', () => {
  let component: NavigationHeaderComponent;
  let fixture: ComponentFixture<NavigationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
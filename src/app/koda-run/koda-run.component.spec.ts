/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KodaRunComponent } from './koda-run.component';

describe('KodaRunComponent', () => {
  let component: KodaRunComponent;
  let fixture: ComponentFixture<KodaRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KodaRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KodaRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

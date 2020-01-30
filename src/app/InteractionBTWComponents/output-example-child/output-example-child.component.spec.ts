import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputExampleChildComponent } from './output-example-child.component';

describe('OutputExampleChildComponent', () => {
  let component: OutputExampleChildComponent;
  let fixture: ComponentFixture<OutputExampleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputExampleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputExampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

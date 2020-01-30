import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputExampleComponent } from './output-example.component';

describe('OutputExampleComponent', () => {
  let component: OutputExampleComponent;
  let fixture: ComponentFixture<OutputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNoteComponent } from './product-note.component';

describe('ProductNoteComponent', () => {
  let component: ProductNoteComponent;
  let fixture: ComponentFixture<ProductNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

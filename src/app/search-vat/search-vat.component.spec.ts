import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVATComponent } from './search-vat.component';

describe('SearchVATComponent', () => {
  let component: SearchVATComponent;
  let fixture: ComponentFixture<SearchVATComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVATComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

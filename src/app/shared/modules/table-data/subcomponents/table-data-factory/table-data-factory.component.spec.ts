import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataFactoryComponent } from './table-data-factory.component';

describe('TableDataFactoryComponent', () => {
  let component: TableDataFactoryComponent;
  let fixture: ComponentFixture<TableDataFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDataFactoryComponent]
    });
    fixture = TestBed.createComponent(TableDataFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

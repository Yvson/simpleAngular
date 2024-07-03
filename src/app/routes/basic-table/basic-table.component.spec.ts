// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Services
import { BasicTableComponent } from 'routes/basic-table/basic-table.component';
import { UniversityService } from "shared/services/university/university.service";

describe('BasicTableComponent', () => {
  let component: BasicTableComponent;
  let fixture: ComponentFixture<BasicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTableComponent],
      providers: [UniversityService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

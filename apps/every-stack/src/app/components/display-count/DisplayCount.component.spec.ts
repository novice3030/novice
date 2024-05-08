import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayCountComponent } from './DisplayCount.component';

describe('DisplayCountComponent', () => {
  let component: DisplayCountComponent;
  let fixture: ComponentFixture<DisplayCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

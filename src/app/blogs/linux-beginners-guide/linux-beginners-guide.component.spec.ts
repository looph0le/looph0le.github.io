import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxBeginnersGuideComponent } from './linux-beginners-guide.component';

describe('LinuxBeginnersGuideComponent', () => {
  let component: LinuxBeginnersGuideComponent;
  let fixture: ComponentFixture<LinuxBeginnersGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxBeginnersGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxBeginnersGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

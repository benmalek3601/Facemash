import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCatsComponent } from './vote-cats.component';

describe('VoteCatsComponent', () => {
  let component: VoteCatsComponent;
  let fixture: ComponentFixture<VoteCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteCatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

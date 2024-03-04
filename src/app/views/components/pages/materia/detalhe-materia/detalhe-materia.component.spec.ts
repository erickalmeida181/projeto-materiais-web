import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheMateriaComponent } from './detalhe-materia.component';

describe('DetalheMateriaComponent', () => {
  let component: DetalheMateriaComponent;
  let fixture: ComponentFixture<DetalheMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanSidenavComponent } from './kanban-sidenav.component';

describe('KanbanSidenavComponent', () => {
  let component: KanbanSidenavComponent;
  let fixture: ComponentFixture<KanbanSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

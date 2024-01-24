import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanSidenavItemComponent } from './kanban-sidenav-item.component';

describe('KanbanSidenavItemComponent', () => {
  let component: KanbanSidenavItemComponent;
  let fixture: ComponentFixture<KanbanSidenavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanSidenavItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

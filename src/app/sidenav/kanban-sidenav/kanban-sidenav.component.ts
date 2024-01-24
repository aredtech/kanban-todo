import { Component, Input } from '@angular/core';
import { KanbanSidenavItemComponent } from '../kanban-sidenav-item/kanban-sidenav-item.component';
import { SidenavItem } from '../sidenav';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResolutionChangeService } from '../../services/resolution-change.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import navMenuEntry from '../../animations/elementEntry';

@Component({
  selector: 'app-kanban-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    KanbanSidenavItemComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './kanban-sidenav.component.html',
  styleUrl: './kanban-sidenav.component.scss',
  animations: [navMenuEntry],
})
export class KanbanSidenavComponent {
  @Input() smallWidth: boolean = false;

  constructor(private _resolutionChange: ResolutionChangeService) {}

  menuItems: SidenavItem[] = [
    {
      name: 'Tasks',
      icon: 'grid_view',
      notificationCount: 8,
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      notificationCount: 2,
    },
    {
      name: 'Teams',
      icon: 'group',
      notificationCount: 6,
    },
  ];

  activeNavItem: SidenavItem = this.menuItems[0];

  handleResizeButtonClick() {
    this._resolutionChange.resolutionChange(!this.smallWidth);
  }
}

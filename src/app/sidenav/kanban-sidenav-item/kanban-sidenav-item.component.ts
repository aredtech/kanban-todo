import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidenavItem } from '../sidenav';
import { CommonModule } from '@angular/common';
import navMenuEntry from '../../animations/elementEntry';

@Component({
  selector: 'app-kanban-sidenav-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-sidenav-item.component.html',
  styleUrl: './kanban-sidenav-item.component.scss',
  animations: [navMenuEntry],
})
export class KanbanSidenavItemComponent {
  @Input() item!: SidenavItem;
  @Input() activeItem!: SidenavItem;
  @Input() smallWidth: boolean = false;

  @Output() navItemClick = new EventEmitter<SidenavItem>();

  handleNavItemClick() {
    this.navItemClick.emit(this.item);
  }
}

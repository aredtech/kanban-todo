import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KanbanSidenavComponent } from './sidenav/kanban-sidenav/kanban-sidenav.component';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { ResolutionChangeService } from './services/resolution-change.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KanbanSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'kanban-todo';
  subscriptions: Subscription[] = [];
  smallWidth: boolean = false;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _mobileChange: ResolutionChangeService
  ) {}

  ngOnInit(): void {
    this._handleResoultionChange();
    this.subscriptions.push(
      this._mobileChange.resolutionIsMobileObserve().subscribe((res) => {
        this.smallWidth = res;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private _handleResoultionChange() {
    const isMobile = this._breakpointObserver.observe('(max-width : 768px)');

    this.subscriptions.push(
      isMobile.subscribe((result) => {
        this._mobileChange.resolutionChange(result.matches);
      })
    );
  }
}

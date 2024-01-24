import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  darkTheme = false;

  @Input() smallWidth = false;

  handleThemeToggleClick() {
    this.darkTheme = !this.darkTheme;

    const body = document.querySelector('body');

    if (this.darkTheme) {
      body?.classList.remove('light');
      body?.classList.add('dark');
    } else {
      body?.classList.remove('dark');
      body?.classList.add('light');
    }
  }
}

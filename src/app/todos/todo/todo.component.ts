import { Component, Input } from '@angular/core';
import { Todo } from '../../home/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo!: Todo;
}

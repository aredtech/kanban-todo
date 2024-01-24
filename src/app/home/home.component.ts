import { Component } from '@angular/core';
import { Todo } from './todo';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todos/todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todos: Todo[] = [
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content: 'Please use trello and designs ',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and des and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carryce. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content: 'Please use trello and designs ',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and des and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carry and designs in Dribbble as reference. And carryce. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
    {
      header: 'Make a Kanban App',
      created_by: 'Raju Mandal',
      created_date: new Date(),
      content:
        'Please use trello and designs in Dribbble as reference. And carry on...',
      tags: ['Design', 'Development'],
    },
  ];
}

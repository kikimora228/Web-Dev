import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Web-Dev bonus task',
      description: 'Finish Task Management System',
      category: 'Study',
      status: 'Completed',
      deadline: new Date('2025-03-09')
    },
    {
      id: 2,
      title: 'SIS 1 IBM',
      description: 'Presentation Defend',
      category: 'Work',
      status: 'Completed',
      deadline: new Date('2025-03-02')
    },
    {
      id: 3,
      title: 'Huawei Course',
      description: 'Certificate',
      category: 'Personal',
      status: 'Not completed',
      deadline: new Date('2025-03-16')
    }
  ];

  getTasks() { return this.tasks; }
  getTaskById(id: number): Task | undefined { return this.tasks.find(t => t.id === id); }

  updateTaskStatus(id: number, status: Task['status']) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = status;
  }
}
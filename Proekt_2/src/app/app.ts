import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type Priority = 'low' | 'medium' | 'high';

type Task = {
  text : string,
  priority: Priority,
  completed: boolean
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  taskText = '';
  selectedPriority : Priority = 'low';
  tasks : Task[] = [];

  addTask() {
    const text = this.taskText.trim();
    if (!text) return;

    this.tasks.push({ text, completed: false, priority: this.selectedPriority });
    this.taskText = '';
    this.selectedPriority = 'medium';
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }

  getPriority(p: Priority){
    if(p == 'high'){
      return 'High';
    } else if(p == 'medium'){
      return 'Medium';
    } else{
      return 'Low';
    }
  }
}


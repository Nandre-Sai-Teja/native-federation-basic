import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todo';
  localData: string = ''
  inputData: string = ''
  ngOnInit(): void {
    this.localData = localStorage.getItem('test') || ''
    this.inputData = localStorage.getItem('value') || ''
  }
}

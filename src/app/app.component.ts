import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicPageComponent } from './components/basic-page/basic-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BasicPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simpleAngular';
}

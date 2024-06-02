import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent {
  name:string = "default"

  getValue(event: Event): string {
    console.log(event);
    return (event.target as HTMLInputElement).value;
  }
}



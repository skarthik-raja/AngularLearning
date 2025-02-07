import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  // template:"<h1>{{title}}</h1>",
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Kanini';
} 

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
  // name = 'Kanini';
  // getName(){
  //   return "Software Solutions";
  // }


  // property binding


  // imageUrl = 'https://picsum.photos/200/300';
  // imageAlt = 'Random Image';

  clickcount = 0;

  clickme(){
    this.clickcount++;
  }
} 

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shapeNames = ['Shape 1', 'Shape 2'];
  newName = '';

  addName() {
    this.shapeNames.push(this.newName);
  }
}

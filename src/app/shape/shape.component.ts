import { Component } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent {
  width = 200;
  height = 200;
  color = 'white';

  edit = false;

  toggleEdit() {
    this.edit = !this.edit;
  }
}

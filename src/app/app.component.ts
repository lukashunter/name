import { Component } from '@angular/core';
import {Name} from "./shared/components/name/name";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  name = new Name('');
}

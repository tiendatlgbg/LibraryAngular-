import { Component } from '@angular/core';

@Component({
  selector: 'ma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public bool:boolean=true;
  title = 'my-app';
}

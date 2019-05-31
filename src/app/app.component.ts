import { Component } from '@angular/core';
import { WebService } from './services/web.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  leaders;

  name = 'Angular';
  constructor (private webService: WebService ) {
    this.webService.getTable().subscribe(
      result => (this.leaders = result),
      error => console.dir(error)
    );
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  name ="blood";


  public count=1;

  public mycount()
{

  this.count =this.count + 1;
}
}

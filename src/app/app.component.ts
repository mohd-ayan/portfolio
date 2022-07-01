import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';


  hideedu()
  {
    let a = document.getElementById('edu') as HTMLElement
    a.style.display="none"
  }


  Showedu()
  {
    let a = document.getElementById('edu') as HTMLElement
    a.style.display="block"
  }


  hideexp()
  {
    let a = document.getElementById('exp') as HTMLElement
    a.style.display="none"
  }

  showexp()
  {
    let a = document.getElementById('exp') as HTMLElement
    a.style.display="block"
  }

}

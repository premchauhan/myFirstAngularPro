import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProject';
  isAdminUrl = false;
  
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      //console.log(event);
      if (event instanceof NavigationEnd ) {
        const url = event.url;
        const urlArr = url.split('/');
        if(urlArr[1] == 'admin') {
          document.body.className += ' admin-panel';
          this.isAdminUrl = true;
        }
      }
    });
  }

  isAdmin(){
    return this.isAdminUrl;
  }

 
  
}

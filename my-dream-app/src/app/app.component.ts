import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name = 'Angular';
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  serverCreationStatus = 'No server was created!';
  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServer(event: Event) {
    console.log(event);
    // this.serverCreationStatus = event.target.value;
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }
}

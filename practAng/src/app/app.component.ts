import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practAng';
  // title = 'my-dream-app';
  name = 'Angular';
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverCreated = false;

  getServerStatus() {
    return this.serverStatus;
  }
  allowNewServer = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  serverCreationStatus = 'No server was created!';
  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!' + this.serverCreationStatus;
  }
  onUpdateServer(event: Event) {
    console.log(event);
    // this.serverCreationStatus = event.target.value;
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }
}

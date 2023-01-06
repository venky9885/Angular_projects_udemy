import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']

})

export class HelloComponent implements OnInit {
  serverName = 'TestServer';
  serverStatus = 'offline';
  // servers = ['TestServer', 'TestServer 2'];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

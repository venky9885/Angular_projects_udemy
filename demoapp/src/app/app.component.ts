import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoapp';
  heel = '544';


  ngOnInit() {
    console.log("app component");
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    console.log("app component onServerAdded");
    this.heel = serverData.serverContent;
    console.log(serverData.serverName);
  }

}

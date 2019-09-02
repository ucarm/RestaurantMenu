import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no servers are created";
  serverName = "";
  userName = "";
  serverCreated = false;
  servers = ['testServer', 'testServer2'];
  displayDetails=false;
  displayDetailsClicks = [];
  displayDetailsClicksCount=0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created. Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsernameField() {
    this.userName = "";
  }
  showAMessage() {
    this.displayDetails= !this.displayDetails;
    if (this.displayDetails ===true){
      this.displayDetailsClicksCount++;
      var today= new Date();
      var dateTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.displayDetailsClicks.push({'value':this.displayDetailsClicksCount, 'DateTime': dateTime});
    }    
  }

  moreThan4(){
    return this.displayDetailsClicksCount>4;
  }
}

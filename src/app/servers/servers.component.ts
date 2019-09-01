import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no servers are created";
  serverName= "";
  userName="";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer =true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus="Server is created. Name is "+this.serverName;
  }

  onUpdateServerName(event :any){
    this.serverName= (<HTMLInputElement>event.target).value;
  }

  resetUsernameField(){
    this.userName="";
  }

}

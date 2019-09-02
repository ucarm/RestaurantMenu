import { Component } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html' 
})
export class ServerComponent{
    static countServer=0
    serverId=1;
    serverStatus= "online";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId=ServerComponent.countServer+1;
        ServerComponent.countServer++;
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.getServerStatus() === 'online' ? 'green': 'red';
    }

    getStatusClass(){
        return  this.getServerStatus() === 'online' ? 'alert alert-success green': 'alert alert-danger';
    }
}
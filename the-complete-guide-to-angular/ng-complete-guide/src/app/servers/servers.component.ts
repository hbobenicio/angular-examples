import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created.';
  serverName: string = 'Testserver';
  serverCreated = false;
  servers = ['Testserver1', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created. Name of the new server is: ' + this.serverName;
  }

  onServerNameInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

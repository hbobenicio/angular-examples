import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // The @Output is used to expose a Event Out interface to the users of this component.
  // The EventEmitter property can be used to emit them.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  // The @ViewChild is used to get a Local Reference to a DOM Element from the Template
  @ViewChild('serverContentElement') serverContentElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // Passing a Local Reference to a DOM Element By Parameter
  onAddServer(serverNameElement: HTMLInputElement) {
    // this.serverCreated.emit({
    //   serverName: serverNameElement.value,
    //   serverContent: this.newServerContent
    // });
    this.serverCreated.emit({
      serverName: serverNameElement.value,
      serverContent: this.serverContentElement.nativeElement.value // Using a Local Reference to a DOM Element by Property
    });
  }

  onAddBlueprint(serverNameElement: HTMLInputElement) {
    // this.blueprintCreated.emit({
    //   serverName: serverNameElement.value,
    //   serverContent: this.newServerContent
    // });
    this.blueprintCreated.emit({
      serverName: serverNameElement.value,
      serverContent: this.serverContentElement.nativeElement.value
    });
  }

}

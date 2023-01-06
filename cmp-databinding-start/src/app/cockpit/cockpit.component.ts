import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(sv: HTMLInputElement) {
    this.serverCreated.emit({ serverName: sv.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(dv: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: dv.value, serverContent: this.serverContentInput.nativeElement.value });
  }
}

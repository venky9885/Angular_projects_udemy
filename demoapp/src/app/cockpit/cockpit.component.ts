import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serCont', { static: true }) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log("cockpit");
  }

  onsub(sv: HTMLInputElement) {

    // serContent
    this.serverCreated.emit({ serverContent: this.serverContentInput.nativeElement.value, serverName: sv.value });
    // console.log(sv.value);

    // console.log("sub" + sv.value + "555" + this.serverContentInput.nativeElement.value);
    // console.log("sub" + serName + serContent);
  }

}

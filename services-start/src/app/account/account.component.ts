import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]

})
export class AccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }
  @Input() account: { name: string, status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();


  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}

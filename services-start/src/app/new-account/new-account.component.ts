import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';
// import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.loggingService.logStatusChange(accountStatus);
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}

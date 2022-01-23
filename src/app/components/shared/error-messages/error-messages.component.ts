import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 's-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss'],
})
export class ErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: string[] | undefined | null;

  errorMessages!: (String | undefined)[];

  ngOnInit(): void {
    console.log('backendErrorsProps ', this.backendErrorsProps);

    if (this.backendErrorsProps)
      Object.keys(this.backendErrorsProps).map(() => {
        if (this.backendErrorsProps) {
          const messages = this.backendErrorsProps;
          return messages;
        }
        return null;
      });
  }
}

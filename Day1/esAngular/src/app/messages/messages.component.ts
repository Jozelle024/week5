import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: string[];
  counter: number;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.get();
    this.counter = 0;
    /*setInterval(() => {
      this.counter += 1;
      this.messageService.add(this.counter.toString());
    }, 2000); */
  }
  clear() {
    this.messageService.clear();
    this.messages = [];
  }

}

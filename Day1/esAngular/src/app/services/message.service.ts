import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private messages: string[] = [];
  constructor() { }

  get(): string[] {
    return this.messages;
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

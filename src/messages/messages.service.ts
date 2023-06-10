import { Injectable } from '@nestjs/common';
import { MessagesRepo } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepo) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    this.messageRepo.create(content);
  }
}

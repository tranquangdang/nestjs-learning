import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepo } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepo, MessagesService],
})
export class MessagesModule {}

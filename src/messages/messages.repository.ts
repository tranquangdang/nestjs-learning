import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepo {
  async findOne(id: string) {
    const rawData = await readFile('messages.json', { encoding: 'utf-8' });
    const messages = JSON.parse(rawData);
    return messages[id];
  }

  async findAll() {
    const rawData = await readFile('messages.json', { encoding: 'utf-8' });
    const messages = JSON.parse(rawData);
    return messages;
  }

  async create(content: string) {
    const rawData = await readFile('messages.json', { encoding: 'utf-8' });
    const messages = JSON.parse(rawData);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}

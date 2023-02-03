import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id:"3123213123",
            description: "Mock item 1",
            name: "Item one",
            qty: 100
        },
        {
            id:"123231224",
            description: "Mock item 2",
            name: "Item two",
            qty: 50
        }
    ]

    findAll(): Item[] {
        return this.items;
    }
}

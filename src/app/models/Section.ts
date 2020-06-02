import { Item } from './Item';

export class Section {
    sections: Section[];
    items: Item[];

    addItem(item: Item) {
        this.items.push(item);
    }

    removeItem(item: Item) {
        this.items.splice(this.items.findIndex(e => e.id === item.id), 1);
    }

    changeItem(item) {
        this.items.splice(this.items.findIndex(e => e.id === item.id), 1, item);
    }
}

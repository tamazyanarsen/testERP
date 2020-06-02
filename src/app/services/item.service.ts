import { Injectable } from '@angular/core';
import { sections } from '../state';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    constructor() {
    }

    changeItems(e) {
        if (e.sections && e.sections.length) {
            e.sections.forEach(b => this.changeItems(b));
        }
        if (e.items && e.items.length) {
            e.sections = e.items.slice();
            delete e.items;
        }
        return e;
    }

    getSections() {
        sections.forEach(e => {
            this.changeItems(e);
            e.isMain = true;
        });
        return sections;
    }
}

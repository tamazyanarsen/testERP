import { Component } from '@angular/core';
import { ItemService } from './services/item.service';
import { Section } from './models/Section';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: Section[];

    constructor(private dataService: ItemService) {
        this.items = dataService.getSections();
    }
}

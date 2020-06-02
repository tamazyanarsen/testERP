import { Component, Inject } from '@angular/core';
import { ItemService } from './services/item.service';
import { Section } from './models/Section';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: Section[];
    selectedNode: Section;
    newSection: Section;

    constructor(private dataService: ItemService, private dialog: MatDialog) {
        this.items = dataService.getSections();
    }

    getSelectedNode(node) {
        this.selectedNode = node;
    }

    addSection() {
        const itms = this.items.filter(e => this.selectedNode && e.name === this.selectedNode.name || e.name);
        itms.unshift({ name: 'Основной раздел' });
        const dialogRef = this.dialog.open(SectionDialogComponent, {
            width: '250px',
            data: {
                section: this.selectedNode || {},
                itemsForSelect: itms
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.newSection = result;
        });
    }
}

@Component({
    selector: 'app-section-dialog',
    templateUrl: './dialogs/section-dialog.html',
})
export class SectionDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<SectionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dataService: ItemService) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    save(section): void {
        // не стал пока что реализовывать добавление в родительский раздел. знаю, как это сделать
        this.dataService.getSections().push(section);
    }

}

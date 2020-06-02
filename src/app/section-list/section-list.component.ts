/* tslint:disable:member-ordering */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Section } from '../models/Section';

interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
}


@Component({
    selector: 'app-section-list',
    templateUrl: './section-list.component.html',
    styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit, OnChanges {

    get transformer(): (e: Section, l: number) => FlatNode {
        return this._transformer;
    }

    constructor() {
        this.dataSource.data = this.sections || [];
    }

    @Input() sections: Section[];
    @Output() selectedNodeEvent = new EventEmitter<Section>();

    selectedNode: Section;

    treeControl = new FlatTreeControl<FlatNode>(
        node => node.level, node => node.expandable);

    // tslint:disable-next-line:variable-name
    private _transformer = (node: Section, level: number) => {
        return {
            expandable: !!node.sections && node.sections.length > 0,
            name: node.name,
            isMain: node.isMain || false,
            sale: node.sale || 0,
            level,
        };
    }

    treeFlattener = new MatTreeFlattener<Section, FlatNode>(
        this.transformer, node => node.level, node => node.expandable, node => node.sections);

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.sections) {
            this.dataSource.data = this.sections || [];
        }
    }

    ngOnInit() {
    }

    hasChild = (_: number, node: FlatNode) => node.expandable;

    setSelectedNode(node) {
        this.selectedNode = node;
        this.selectedNodeEvent.emit(node);
    }

}

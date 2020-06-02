import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, SectionDialogComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTreeModule
} from '@angular/material';
import { SectionListComponent } from './section-list/section-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        SectionListComponent,
        SectionDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTreeModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [SectionDialogComponent]
})
export class AppModule {
}

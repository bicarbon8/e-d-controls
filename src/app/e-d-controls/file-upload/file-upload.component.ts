import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BindingsDataService } from '../bindings-data.service';
import { XML } from '../helpers/xml';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css', '../e-d-controls.component.css']
})
export class FileUploadComponent implements OnInit, OnDestroy {
    message: string;
    subscription: Subscription;
    requiredFileType: string;
    fileName: string;

    private _xmlParser: DOMParser;

    constructor(private readonly bindings: BindingsDataService) {
        this.requiredFileType = '.binds';
        this._xmlParser = new DOMParser();
    }

    ngOnInit(): void {
        this.subscription = this.bindings.currentMessage.subscribe(message => this.message = message);
        this.bindings.getDefaultBinds()
            .subscribe(xml => this.parseBindingsXmlString(xml));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    handleEvent(event): void {
        if (event) {
            const files: Array<File> = event.target?.files;
            if (files?.length) {
                this.parseBindingsFile(files[0]);
            }
        }
    }

    async parseBindingsFile(file: File): Promise<void> {
        if (file) {
            this.fileName = file.name;
            let text: string = await file.text();
            this.parseBindingsXmlString(text);
        }
    }

    parseBindingsXmlString(xml: string): void {
        let bindingsDoc: Document = this._xmlParser.parseFromString(xml, 'text/xml');
        let bindingsObj: Object = XML.toObject(bindingsDoc);
        console.info('successfully parsed bindings file');
        this.bindings.updateDocument(JSON.stringify(bindingsObj));
    }
}

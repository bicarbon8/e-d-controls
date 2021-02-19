import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { XML } from 'src/helpers/xml';
import { BindingsDataService } from '../bindings-data.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;
  requiredFileType: string;
  fileName: string;

  private _xmlParser: DOMParser;

  constructor(private bindings: BindingsDataService) {
      this.requiredFileType = 'text/xml';
      this._xmlParser = new DOMParser();
  }
  
  ngOnInit(): void {
    this.subscription = this.bindings.currentMessage.subscribe(message => this.message = message);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  async parseBindingsFile(event): Promise<void> {
      if (event) {
      console.log(JSON.stringify(event));
      let files: File[] = event.target?.files;
      if (files && files.length > 0) {
          let file: File = files[0];
          if (file) {
          this.fileName = file.name;
          let text: string = await file.text();
          let bindingsDoc: Document = this._xmlParser.parseFromString(text, 'text/xml');
          let bindingsObj: Object = XML.toObject(bindingsDoc);
          console.info('successfully parsed');
          this.bindings.updateDocument(JSON.stringify(bindingsObj));
        }
      }
    }
  }
}
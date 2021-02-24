import { OnInit, OnDestroy, AfterViewChecked, Component, NgZone } from "@angular/core";
import { Subscription } from "rxjs";
import { Find } from "src/helpers/find";
import { Input } from "src/helpers/input";
import { BindingsDataService } from "../bindings-data.service";

@Component({ template: '' })
export abstract class BaseTabComponent implements OnInit, OnDestroy, AfterViewChecked {
    bindings: Object;
    bindingsStr: string;
    subscription: Subscription;
    msnry: Masonry;

    constructor(private dataSvc: BindingsDataService, private zone: NgZone) { }

    abstract getMasonrySelector(): string;

    updateBindings(message: string): void {
      if (message) {
        console.info('received message...');
        this.bindingsStr = message;
        try {
          this.bindings = JSON.parse(message);
          console.info('successfully parsed message');
        } catch (e) {
          console.error(`invalid message received: ${message}`);
        }
      }
    }
  
    getKeysFor(key: string): string[] {
      if (this.bindings) {
        let ctrl: Input = Find.gamePadInput(this.bindings, key);
        if (ctrl) {
          return ctrl.keys.reverse();
        }
      }
      return [];
    }
  
    ngOnInit(): void {
      this.subscription = this.dataSvc.currentMessage.subscribe(message => this.updateBindings(message));
      try {
        this.msnry = new Masonry(this.getMasonrySelector());
      } catch (e) {/* ignore */}
    }
  
    ngAfterViewChecked(): void {
      this.refreshLayout();
    }

    refreshLayout(): void {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.msnry?.layout();
        }, 500);
      });
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
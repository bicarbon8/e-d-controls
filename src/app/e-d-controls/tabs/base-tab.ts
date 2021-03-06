import { OnInit, OnDestroy, AfterViewChecked, Component, NgZone, HostListener } from "@angular/core";
import { Subscription } from "rxjs";
import { Find } from "../helpers/find";
import { Input } from "../helpers/input";
import { BindingsDataService } from "../bindings-data.service";
import { CardData } from "./tab-card/card-data";
import { CardDataControls } from "./tab-card/card-data-controls";
import * as Masonry from 'masonry-layout';

@Component({ template: '' })
export abstract class BaseTab implements OnInit, OnDestroy, AfterViewChecked {
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

    getCardData(name: string, keyValPairs: Map<string, string>): CardData {
      let keys: string[];
      let controls: CardDataControls[] = [];
      let unassigned: CardDataControls[] = [];

      keyValPairs.forEach((locator: string, command: string) => {
        keys = this.getKeysFor(locator);
        if (keys?.length > 0) { controls.push({command: command, keys: keys}); }
        else { unassigned.push({command: command}) }
        keys = null;
      });

      return {name: name, controls: controls, unassigned: unassigned};
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
        }, 200);
      });
    }

    @HostListener('keydown.control.p')
    disableMasonry(): void {
      console.info('masonry layout disabled while printing');
      this.msnry?.destroy();
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
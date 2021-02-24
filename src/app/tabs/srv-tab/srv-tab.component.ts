import { Component } from '@angular/core';
import { BaseTabComponent } from '../base-tab.component';
import { CardData } from '../tab-card/card-data';
import { CardDataControls } from '../tab-card/card-data-controls';

@Component({
  selector: 'app-srv-tab',
  templateUrl: './srv-tab.component.html',
  styleUrls: ['./srv-tab.component.css']
})
export class SrvTabComponent extends BaseTabComponent {
  getMasonrySelector(): string {
    return '.srv-grid';
  }
  
  getHeadingData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.steeringaxis');
    if (keys?.length > 0) {
      controls.push({command: 'Steering', keys: keys});
    }
    keys = this.getKeysFor('root.steerleftbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Steer Left', keys: keys});
    }
    keys = this.getKeysFor('root.steerrightbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Steer Right', keys: keys});
    }
    keys = this.getKeysFor('root.buggyrollaxisraw');
    if (keys?.length > 0) {
      controls.push({command: 'Roll', keys: keys});
    }
    keys = this.getKeysFor('root.buggyrollleftbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Roll Left', keys: keys});
    }
    keys = this.getKeysFor('root.buggyrollrightbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Roll Right', keys: keys});
    }
    keys = this.getKeysFor('root.buggypitchaxis');
    if (keys?.length > 0) {
      controls.push({command: 'Pitch', keys: keys});
    }
    keys = this.getKeysFor('root.buggypitchupbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Pitch Up', keys: keys});
    }
    keys = this.getKeysFor('root.buggypitchdownbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Pitch Down', keys: keys});
    }

    return {name: 'Heading', controls: controls};
  }
  
  getMovementData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.verticalthrustersbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Vertical Thrusters', keys: keys});
    }
    keys = this.getKeysFor('root.drivespeedaxis');
    if (keys?.length > 0) {
      controls.push({command: 'Throttle', keys: keys});
    }
    keys = this.getKeysFor('root.increasespeedbuttonmax');
    if (keys?.length > 0) {
      controls.push({command: 'Max Throttle Forward', keys: keys});
    }
    keys = this.getKeysFor('root.decreasespeedbuttonmax');
    if (keys?.length > 0) {
      controls.push({command: 'Max Throttle Backward', keys: keys});
    }
    keys = this.getKeysFor('root.increasespeedbuttonpartial');
    if (keys?.length > 0) {
      controls.push({command: 'Increase Speed', keys: keys});
    }
    keys = this.getKeysFor('root.decreasespeedbuttonpartial');
    if (keys?.length > 0) {
      controls.push({command: 'Decrease Speed', keys: keys});
    }
    keys = this.getKeysFor('root.toggledriveassist');
    if (keys?.length > 0) {
      controls.push({command: 'Toggle Drive Assist', keys: keys});
    }
    keys = this.getKeysFor('root.autobreakbuggybutton');
    if (keys?.length > 0) {
      controls.push({command: 'Toggle Handbrake', keys: keys});
    }

    return {name: 'Movement', controls: controls};
  }
  
  getDrivingMiscData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.headlightsbuggybutton');
    if (keys?.length > 0) {
      controls.push({command: 'Toggle Lights', keys: keys});
    }
    keys = this.getKeysFor('root.increaseenginespower_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'PIPs to Engines', keys: keys});
    }
    keys = this.getKeysFor('root.increaseweaponspower_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'PIPs to Weapons', keys: keys});
    }
    keys = this.getKeysFor('root.increasesystemspower_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'PIPs to Systems', keys: keys});
    }
    keys = this.getKeysFor('root.resetpowerdistribution_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'Reset PIPs', keys: keys});
    }
    keys = this.getKeysFor('root.togglecargoscoop_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'Toggle Cargo Scoop', keys: keys});
    }
    keys = this.getKeysFor('root.ejectallcargo_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'Eject All Cargo', keys: keys});
    }
    keys = this.getKeysFor('root.recalldismissship');
    if (keys?.length > 0) {
      controls.push({command: 'Recall / Dismiss Ship', keys: keys});
    }

    return {name: 'Driving / Misc.', controls: controls};
  }

  getTargetingData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.selecttarget_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'targetAheadKey', keys: keys});
    }

    return {name: 'Targeting', controls: controls};
  }
  
  getWeaponsData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.buggyprimaryfirebutton');
    if (keys?.length > 0) {
      controls.push({command: 'Primary Fire', keys: keys});
    }
    keys = this.getKeysFor('root.buggysecondaryfirebutton');
    if (keys?.length > 0) {
      controls.push({command: 'Secondary Fire', keys: keys});
    }
    keys = this.getKeysFor('root.togglebuggyturretbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Toggle Turret', keys: keys});
    }
    keys = this.getKeysFor('root.buggycyclefiregroupnext');
    if (keys?.length > 0) {
      controls.push({command: 'Next Fire Group', keys: keys});
    }
    keys = this.getKeysFor('root.buggycyclefiregroupprevious');
    if (keys?.length > 0) {
      controls.push({command: 'Previous Fire Group', keys: keys});
    }
    keys = this.getKeysFor('root.buggyturretyawaxisraw');
    if (keys?.length > 0) {
      controls.push({command: 'Turret Yaw', keys: keys});
    }
    keys = this.getKeysFor('root.buggyturretyawleftbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Turret Yaw Left', keys: keys});
    }
    keys = this.getKeysFor('root.buggyturretyawrightbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Turret Yaw Right', keys: keys});
    }
    keys = this.getKeysFor('root.buggyturretpitchaxisraw');
    if (keys?.length > 0) {
      controls.push({command: 'Turret Pitch', keys: keys});
    }
    keys = this.getKeysFor('root.buggyturretpitchupbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Turret Pitch Up', keys: keys});
    }
    keys = this.getKeysFor('root.buggyturretpitchdownbutton');
    if (keys?.length > 0) {
      controls.push({command: 'Turret Pitch Down', keys: keys});
    }
    keys = this.getKeysFor('root.playerhudmodetoggle_buggy');
    if (keys?.length > 0) {
      controls.push({command: 'Toggle HUD Mode', keys: keys});
    }

    return {name: 'Weapons', controls: controls};
  }
  
  /** UI / MENUS */
  uiFocusKey: string = 'root.uifocus_buggy';
  focusLeftPanelKey: string = 'root.focusleftpanel_buggy';
  focusCommsPanelkey: string = 'root.focuscommspanel_buggy';
  quickCommsPanelKey: string = 'root.quickcommspanel_buggy';
  focusRolePanelKey: string = 'root.focusradarpanel_buggy';
  focusRightPanelKey: string = 'root.focusrightpanel_buggy';
  toggleHeadlookKey: string = 'root.headlooktoggle_buggy';
}

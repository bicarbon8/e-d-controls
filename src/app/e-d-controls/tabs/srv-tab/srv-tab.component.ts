import { Component } from '@angular/core';
import { BaseTab } from '../base-tab';
import { CardData } from '../tab-card/card-data';

@Component({
  selector: 'app-srv-tab',
  templateUrl: './srv-tab.component.html',
  styleUrls: ['../tabs.component.css', '../../e-d-controls.component.css']
})
export class SrvTabComponent extends BaseTab {
  getMasonrySelector(): string {
    return '.srv-grid';
  }
  
  getHeadingData(): CardData {
    return this.getCardData('Heading', new Map([
      ['Steering', 'root.steeringaxis'],
      ['Steer Left', 'root.steerleftbutton'],
      ['Steer Right', 'root.steerrightbutton'],
      ['Roll', 'root.buggyrollaxisraw'],
      ['Roll Left', 'root.buggyrollleftbutton'],
      ['Roll Right', 'root.buggyrollrightbutton'],
      ['Pitch', 'root.buggypitchaxis'],
      ['Pitch Up', 'root.buggypitchupbutton'],
      ['Pitch Down', 'root.buggypitchdownbutton']
    ]));
  }
  
  getMovementData(): CardData {
    return this.getCardData('Movement', new Map([
      ['Vertical Thrusters', 'root.verticalthrustersbutton'],
      ['Throttle', 'root.drivespeedaxis'],
      ['Max Throttle Forward', 'root.increasespeedbuttonmax'],
      ['Max Throttle Backward', 'root.decreasespeedbuttonmax'],
      ['Increase Speed', 'root.increasespeedbuttonpartial'],
      ['Decrease Speed', 'root.decreasespeedbuttonpartial'],
      ['Toggle Drive Assist', 'root.toggledriveassist'],
      ['Toggle Handbrake', 'root.autobreakbuggybutton']
    ]));
  }
  
  getDrivingMiscData(): CardData {
    return this.getCardData('Driving / Misc.', new Map([
      ['Toggle Lights', 'root.headlightsbuggybutton'],
      ['PIPs to Engines', 'root.increaseenginespower_buggy'],
      ['PIPs to Weapons', 'root.increaseweaponspower_buggy'],
      ['PIPs to Systems', 'root.increasesystemspower_buggy'],
      ['Reset PIPs', 'root.resetpowerdistribution_buggy'],
      ['Toggle Cargo Scoop', 'root.togglecargoscoop_buggy'],
      ['Eject All Cargo', 'root.ejectallcargo_buggy'],
      ['Recall / Dismiss Ship', 'root.recalldismissship']
    ]));
  }

  getTargetingData(): CardData {
    return this.getCardData('Targeting', new Map([
      ['targetAheadKey', 'root.selecttarget_buggy']
    ]));
  }
  
  getWeaponsData(): CardData {
    return this.getCardData('Weapons', new Map([
      ['Primary Fire', 'root.buggyprimaryfirebutton'],
      ['Secondary Fire', 'root.buggysecondaryfirebutton'],
      ['Toggle Turret', 'root.togglebuggyturretbutton'],
      ['Next Fire Group', 'root.buggycyclefiregroupnext'],
      ['Previous Fire Group', 'root.buggycyclefiregroupprevious'],
      ['Turret Yaw', 'root.buggyturretyawaxisraw'],
      ['Turret Yaw Left', 'root.buggyturretyawleftbutton'],
      ['Turret Yaw Right', 'root.buggyturretyawrightbutton'],
      ['Turret Pitch', 'root.buggyturretpitchaxisraw'],
      ['Turret Pitch Up', 'root.buggyturretpitchupbutton'],
      ['Turret Pitch Down', 'root.buggyturretpitchdownbutton'],
      ['Toggle HUD Mode', 'root.playerhudmodetoggle_buggy']
    ]));
  }

  getHeadlookData(): CardData {
    return this.getCardData('Headlook', new Map([
      ['Toggle Headlook', 'root.headlooktoggle_buggy'],
      ['Reset View', 'root.headlookreset'],
      ['Up / Down', 'root.headlookpitchaxisraw'],
      ['Look Up', 'root.headlookpitchup'],
      ['Look Down', 'root.headlookpitchdown'],
      ['Left / Right', 'root.headlookyawaxis'],
      ['Look Left', 'root.headlookyawleft'],
      ['Look Right', 'root.headlookyawright']
    ]));
  }

  getMenuData(): CardData {
    return this.getCardData('UI / Menus', new Map([
      ['UI Focus', 'root.uifocus_buggy'],
      ['Left Panel', 'root.focusleftpanel_buggy'],
      ['Comms Panel', 'root.focuscommspanel_buggy'],
      ['Quck Comms Panel', 'root.quickcommspanel_buggy'],
      ['Right Panel', 'root.focusrightpanel_buggy'],
      ['Role Panel', 'root.focusradarpanel_buggy'],
      ['UI Up', 'root.ui_up'],
      ['UI Down', 'root.ui_down'],
      ['UI Left', 'root.ui_left'],
      ['UI Right', 'root.ui_right'],
      ['UI Select', 'root.ui_select'],
      ['UI Back', 'root.ui_back'],
      ['UI Toggle', 'root.ui_toggle'],
      ['Next Panel', 'root.cyclenextpanel'],
      ['Previous Panel', 'root.cyclepreviouspanel'],
      ['Next Page', 'root.cyclenextpage'],
      ['Previous Page', 'root.cyclepreviouspage']
    ]));
  }
}

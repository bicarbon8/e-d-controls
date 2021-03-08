import { Component } from '@angular/core';
import { BaseTab } from '../base-tab';
import { CardData } from '../tab-card/card-data';

@Component({
  selector: 'app-ship-tab',
  templateUrl: './ship-tab.component.html',
  styleUrls: ['../tabs.component.css']
})
export class ShipTabComponent extends BaseTab {
  getMasonrySelector(): string {
    return '.ship-grid';
  }

  getHeadingData(): CardData {
    return this.getCardData('Heading', new Map([
      ['Yaw', 'root.yawaxisraw'],
      ['Yaw Left', 'root.yawleftbutton'],
      ['Yaw Right', 'root.yawrightbutton'],
      ['Roll', 'root.rollaxisraw'],
      ['Roll Left', 'root.rollleftbutton'],
      ['Roll Right', 'root.rollrightbutton'],
      ['Pitch', 'root.pitchaxisraw'],
      ['Pitch Up', 'root.pitchupbutton'],
      ['Pitch Down', 'root.pitchdownbutton']
    ]));
  }

  getMovementData(): CardData {
    return this.getCardData('Movement', new Map([
      ['Lateral Thrust', 'root.lateralthrustraw'],
      ['Thrust Left', 'root.leftthrustbutton'],
      ['Thrust Right', 'root.rightthrustbutton'],
      ['Vertical Thrust', 'root.verticalthrustraw'],
      ['Thrust Up', 'root.upthrustbutton'],
      ['Thrust Down', 'root.downthrustbutton'],
      ['Ahead Thrust', 'root.aheadthrust'],
      ['Thrust Forwards', 'root.forwardthrustbutton'],
      ['Thrust Backwards', 'root.backwardthrustbutton']
    ]));
  }

  getThrustData(): CardData {
    return this.getCardData('Thrust', new Map([
      ['Throttle', 'root.throttleaxis'],
      ['Throttle Forwards', 'root.forwardkey'],
      ['Throttle Backwards', 'root.backwardkey'],
      ['Set Throttle -100%', 'root.setspeedminus100'],
      ['Set Throttle -75%', 'root.setspeedminus75'],
      ['Set Throttle -50%', 'root.setspeedminus50'],
      ['Set Throttle -25%', 'root.setspeedminus25'],
      ['Set Throttle 0%', 'root.setspeedzero'],
      ['Set Throttle 25%', 'root.setspeed25'],
      ['Set Throttle 50%', 'root.setspeed50'],
      ['Set Throttle 75%', 'root.setspeed75'],
      ['Set Throttle 100%', 'root.setspeed100'],
      ['Toggle Flight Assist', 'root.toggleflightassist'],
      ['Boost', 'root.useboostjuice']
    ]));
  }
  
  getFlightMiscData(): CardData {
    return this.getCardData('Flight / Misc.', new Map([
      ['Toggle Silent Running', 'root.togglebuttonupinput'],
      ['Toggle Lights', 'root.shipspotlighttoggle'],
      ['Radar Zoom', 'root.radarrangeaxis'],
      ['Radar Zoom Out', 'root.radarincreaserange'],
      ['Radar Zoom In', 'root.radardecreaserange'],
      ['PIPs to Engines', 'root.increaseenginespower'],
      ['PIPs to Weapons', 'root.increaseweaponspower'],
      ['PIPs to Systems', 'root.increasesystemspower'],
      ['Reset PIPs', 'root.resetpowerdistribution'],
      ['Toggle Cargo Scoop', 'root.togglecargoscoop'],
      ['Eject All Cargo', 'root.ejectallcargo'],
      ['Toggle Landing Gear', 'root.landinggeartoggle'],
      ['Toggle Night Vision', 'root.nightvisiontoggle']
    ]));
  }

  getFrameShiftData(): CardData {
    return this.getCardData('Frame Shift Drive', new Map([
      ['Toggle FSD', 'root.hypersupercombination'],
      ['Supercruise', 'root.supercruise'],
      ['Hyperspace Jump', 'root.hyperspace'],
      ['Toggle Orbit Lines', 'root.orbitlinestoggle'],
      ['Enter FSS', 'root.explorationfssenter']
    ]));
  }

  getTargetingData(): CardData {
    return this.getCardData('Targeting', new Map([
      ['Select Target Ahead', 'root.selecttarget'],
      ['Next Target', 'root.cyclenexttarget'],
      ['Previous Target', 'root.cycleprevioustarget'],
      ['Select Highest Threat', 'root.selecthighestthreat'],
      ['Next Hostile Target', 'root.cyclenexthostiletarget'],
      ['Previous Hostile Target', 'root.cycleprevioushostiletarget'],
      ['Target Wingman 0', 'root.targetwingman0'],
      ['Target Wingman 1', 'root.targetwingman1'],
      ['Target Wingman 2', 'root.targetwingman2'],
      ['Select Wingman\'s Target', 'root.selecttargetstarget'],
      ['Toggle Nav Lock', 'root.wingnavlock'],
      ['Target Next Subsystem', 'root.cyclenextsubsystem'],
      ['Target Previous Subsystem', 'root.cycleprevioussubsystem'],
      ['Target Next System in Route', 'root.targetnextroutesystem']
    ]));
  }

  getWeaponsData(): CardData {
    return this.getCardData('Weapons', new Map([
      ['Primary Fire', 'root.primaryfire'],
      ['Secondary Fire', 'root.secondaryfire'],
      ['Next Fire Group', 'root.cyclefiregroupnext'],
      ['Previous Fire Group', 'root.cyclefiregroupprevious'],
      ['Toggle Hardpoints', 'root.deployhardpointtoggle'],
      ['Toggle HUD Mode', 'root.playerhudmodetoggle']
    ]));
  }

  getUtilitiesData(): CardData {
    return this.getCardData('Utilities', new Map([
      ['Deploy Heatsink', 'root.deployheatsink'],
      ['Use Shield Cell', 'root.useshieldcell'],
      ['Use Chaff', 'root.firechafflauncher'],
      ['Charge ECM', 'root.chargeecm']
    ]));
  }

  getHeadlookData(): CardData {
    return this.getCardData('Headlook', new Map([
      ['Toggle Headlook', 'root.headlooktoggle'],
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
      ['UI Focus', 'root.uifocus'],
      ['Left Panel', 'root.focusleftpanel'],
      ['Comms Panel', 'root.focuscommspanel'],
      ['Quck Comms Panel', 'root.quickcommspanel'],
      ['Right Panel', 'root.focusrightpanel'],
      ['Role Panel', 'root.focusradarpanel'],
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

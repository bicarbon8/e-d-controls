import { Component } from '@angular/core';
import { BaseTabComponent } from '../base-tab.component';
import { CardData } from '../tab-card/card-data';
import { CardDataControls } from '../tab-card/card-data-controls';

@Component({
  selector: 'app-ship-tab',
  templateUrl: './ship-tab.component.html',
  styleUrls: ['./ship-tab.component.css']
})
export class ShipTabComponent extends BaseTabComponent {
  getMasonrySelector(): string {
    return '.ship-grid';
  }

  getHeadingData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.yawaxisraw');
    if (keys?.length > 0) { controls.push({command: 'Yaw', keys: keys}); }
    keys = this.getKeysFor('root.yawleftbutton');
    if (keys?.length > 0) { controls.push({command: 'Yaw Left', keys: keys}); }
    keys = this.getKeysFor('root.yawrightbutton');
    if (keys?.length > 0) { controls.push({command: 'Yaw Right', keys: keys}); }
    keys = this.getKeysFor('root.rollaxisraw');
    if (keys?.length > 0) { controls.push({command: 'Roll', keys: keys}); }
    keys = this.getKeysFor('root.rollleftbutton');
    if (keys?.length > 0) { controls.push({command: 'Roll Left', keys: keys}); }
    keys = this.getKeysFor('root.rollrightbutton');
    if (keys?.length > 0) { controls.push({command: 'Roll Right', keys: keys}); }
    keys = this.getKeysFor('root.pitchaxisraw');
    if (keys?.length > 0) { controls.push({command: 'Pitch', keys: keys}); }
    keys = this.getKeysFor('root.pitchupbutton');
    if (keys?.length > 0) { controls.push({command: 'Pitch Up', keys: keys}); }
    keys = this.getKeysFor('root.pitchdownbutton');
    if (keys?.length > 0) { controls.push({command: 'Pitch Down', keys: keys}); }

    return {name: 'Heading', controls: controls};
  }

  getMovementData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.lateralthrustraw');
    if (keys?.length > 0) { controls.push({command: 'Lateral Thrust', keys: keys}); }
    keys = this.getKeysFor('root.leftthrustbutton');
    if (keys?.length > 0) { controls.push({command: 'Thrust Left', keys: keys}); }
    keys = this.getKeysFor('root.rightthrustbutton');
    if (keys?.length > 0) { controls.push({command: 'Thrust Right', keys: keys}); }
    keys = this.getKeysFor('root.verticalthrustraw');
    if (keys?.length > 0) { controls.push({command: 'Vertical Thrust', keys: keys}); }
    keys = this.getKeysFor('root.upthrustbutton');
    if (keys?.length > 0) { controls.push({command: 'Thrust Up', keys: keys}); }
    keys = this.getKeysFor('root.downthrustbutton');
    if (keys?.length > 0) { controls.push({command: 'Thrust Down', keys: keys}); }
    keys = this.getKeysFor('root.aheadthrust');
    if (keys?.length > 0) { controls.push({command: 'Ahead Thrust', keys: keys}); }
    keys = this.getKeysFor('root.forwardthrustbutton');
    if (keys?.length > 0) { controls.push({command: 'Thrust Forwards', keys: keys}); }
    keys = this.getKeysFor('root.backwardthrustbutton');
    if (keys?.length > 0) { controls.push({command: 'Thrust Backwards', keys: keys}); }

    return {name: 'Movement', controls: controls};
  }

  getThrustData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.throttleaxis');
    if (keys?.length > 0) { controls.push({command: 'Throttle', keys: keys}); }
    keys = this.getKeysFor('root.forwardkey');
    if (keys?.length > 0) { controls.push({command: 'Throttle Forwards', keys: keys}); }
    keys = this.getKeysFor('root.backwardkey');
    if (keys?.length > 0) { controls.push({command: 'Throttle Backwards', keys: keys}); }
    keys = this.getKeysFor('root.setspeedminus100');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle -100%', keys: keys}); }
    keys = this.getKeysFor('root.setspeedminus75');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle -75%', keys: keys}); }
    keys = this.getKeysFor('root.setspeedminus50');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle -50%', keys: keys}); }
    keys = this.getKeysFor('root.setspeedminus25');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle -25%', keys: keys}); }
    keys = this.getKeysFor('root.setspeedzero');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle 0%', keys: keys}); }
    keys = this.getKeysFor('root.setspeed25');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle 25%', keys: keys}); }
    keys = this.getKeysFor('root.setspeed50');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle 50%', keys: keys}); }
    keys = this.getKeysFor('root.setspeed75');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle 75%', keys: keys}); }
    keys = this.getKeysFor('root.setspeed100');
    if (keys?.length > 0) { controls.push({command: 'Set Throttle 100%', keys: keys}); }
    keys = this.getKeysFor('root.toggleflightassist');
    if (keys?.length > 0) { controls.push({command: 'Toggle Flight Assist', keys: keys}); }
    keys = this.getKeysFor('root.useboostjuice');
    if (keys?.length > 0) { controls.push({command: 'Boost', keys: keys}); }

    return {name: 'Thrust', controls: controls};
  }
  
  getFlightMiscData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.togglebuttonupinput');
    if (keys?.length > 0) { controls.push({command: 'Toggle Silent Running', keys: keys}); }
    keys = this.getKeysFor('root.shipspotlighttoggle');
    if (keys?.length > 0) { controls.push({command: 'Toggle Lights', keys: keys}); }
    keys = this.getKeysFor('root.radarrangeaxis');
    if (keys?.length > 0) { controls.push({command: 'Radar Zoom', keys: keys}); }
    keys = this.getKeysFor('root.radarincreaserange');
    if (keys?.length > 0) { controls.push({command: 'Radar Zoom Out', keys: keys}); }
    keys = this.getKeysFor('root.radardecreaserange');
    if (keys?.length > 0) { controls.push({command: 'Radar Zoom In', keys: keys}); }
    keys = this.getKeysFor('root.increaseenginespower');
    if (keys?.length > 0) { controls.push({command: 'PIPs to Engines', keys: keys}); }
    keys = this.getKeysFor('root.increaseweaponspower');
    if (keys?.length > 0) { controls.push({command: 'PIPs to Weapons', keys: keys}); }
    keys = this.getKeysFor('root.increasesystemspower');
    if (keys?.length > 0) { controls.push({command: 'PIPs to Systems', keys: keys}); }
    keys = this.getKeysFor('root.resetpowerdistribution');
    if (keys?.length > 0) { controls.push({command: 'Reset PIPs', keys: keys}); }
    keys = this.getKeysFor('root.togglecargoscoop');
    if (keys?.length > 0) { controls.push({command: 'Toggle Cargo Scoop', keys: keys}); }
    keys = this.getKeysFor('root.ejectallcargo');
    if (keys?.length > 0) { controls.push({command: 'Eject All Cargo', keys: keys}); }
    keys = this.getKeysFor('root.landinggeartoggle');
    if (keys?.length > 0) { controls.push({command: 'Toggle Landing Gear', keys: keys}); }
    keys = this.getKeysFor('root.nightvisiontoggle');
    if (keys?.length > 0) { controls.push({command: 'Toggle Night Vision', keys: keys}); }

    return {name: 'Flight / Misc.', controls: controls};
  }

  getFrameShiftData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.hypersupercombination');
    if (keys?.length > 0) { controls.push({command: 'Toggle FSD', keys: keys}); }
    keys = this.getKeysFor('root.supercruise');
    if (keys?.length > 0) { controls.push({command: 'Supercruise', keys: keys}); }
    keys = this.getKeysFor('root.hyperspace');
    if (keys?.length > 0) { controls.push({command: 'Hyperspace Jump', keys: keys}); }
    keys = this.getKeysFor('root.orbitlinestoggle');
    if (keys?.length > 0) { controls.push({command: 'Toggle Orbit Lines', keys: keys}); }
    keys = this.getKeysFor('root.explorationfssenter');
    if (keys?.length > 0) { controls.push({command: 'Enter FSS', keys: keys}); }

    return {name: 'Frame Shift Drive', controls: controls};
  }

  getTargetingData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.selecttarget');
    if (keys?.length > 0) { controls.push({command: 'Select Target Ahead', keys: keys}); }
    keys = this.getKeysFor('root.cyclenexttarget');
    if (keys?.length > 0) { controls.push({command: 'Next Target', keys: keys}); }
    keys = this.getKeysFor('root.cycleprevioustarget');
    if (keys?.length > 0) { controls.push({command: 'Previous Target', keys: keys}); }
    keys = this.getKeysFor('root.selecthighestthreat');
    if (keys?.length > 0) { controls.push({command: 'Select Highest Threat', keys: keys}); }
    keys = this.getKeysFor('root.cyclenexthostiletarget');
    if (keys?.length > 0) { controls.push({command: 'Next Hostile Target', keys: keys}); }
    keys = this.getKeysFor('root.cycleprevioushostiletarget');
    if (keys?.length > 0) { controls.push({command: 'Previous Hostile Target', keys: keys}); }
    keys = this.getKeysFor('root.targetwingman0');
    if (keys?.length > 0) { controls.push({command: 'Target Wingman 0', keys: keys}); }
    keys = this.getKeysFor('root.targetwingman1');
    if (keys?.length > 0) { controls.push({command: 'Target Wingman 1', keys: keys}); }
    keys = this.getKeysFor('root.targetwingman2');
    if (keys?.length > 0) { controls.push({command: 'Target Wingman 2', keys: keys}); }
    keys = this.getKeysFor('root.selecttargetstarget');
    if (keys?.length > 0) { controls.push({command: 'Select Wingman\'s Target', keys: keys}); }
    keys = this.getKeysFor('root.wingnavlock');
    if (keys?.length > 0) { controls.push({command: 'Toggle Nav Lock', keys: keys}); }
    keys = this.getKeysFor('root.cyclenextsubsystem');
    if (keys?.length > 0) { controls.push({command: 'Target Next Subsystem', keys: keys}); }
    keys = this.getKeysFor('root.cycleprevioussubsystem');
    if (keys?.length > 0) { controls.push({command: 'Target Previous Subsystem', keys: keys}); }
    keys = this.getKeysFor('root.targetnextroutesystem');
    if (keys?.length > 0) { controls.push({command: 'Target Next System in Route', keys: keys}); }

    return {name: 'Targeting', controls: controls};
  }

  getWeaponsData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.primaryfire');
    if (keys?.length > 0) { controls.push({command: 'Primary Fire', keys: keys}); }
    keys = this.getKeysFor('root.secondaryfire');
    if (keys?.length > 0) { controls.push({command: 'Secondary Fire', keys: keys}); }
    keys = this.getKeysFor('root.cyclefiregroupnext');
    if (keys?.length > 0) { controls.push({command: 'Next Fire Group', keys: keys}); }
    keys = this.getKeysFor('root.cyclefiregroupprevious');
    if (keys?.length > 0) { controls.push({command: 'Previous Fire Group', keys: keys}); }
    keys = this.getKeysFor('root.deployhardpointtoggle');
    if (keys?.length > 0) { controls.push({command: 'Toggle Hardpoints', keys: keys}); }
    keys = this.getKeysFor('root.playerhudmodetoggle');
    if (keys?.length > 0) { controls.push({command: 'Toggle HUD Mode', keys: keys}); }

    return {name: 'Weapons', controls: controls};
  }

  getUtilitiesData(): CardData {
    let keys: string[];
    let controls: CardDataControls[] = [];
    keys = this.getKeysFor('root.deployheatsink');
    if (keys?.length > 0) { controls.push({command: 'Deploy Heatsink', keys: keys}); }
    keys = this.getKeysFor('root.useshieldcell');
    if (keys?.length > 0) { controls.push({command: 'Use Shield Cell', keys: keys}); }
    keys = this.getKeysFor('root.firechafflauncher');
    if (keys?.length > 0) { controls.push({command: 'Use Chaff', keys: keys}); }
    keys = this.getKeysFor('root.chargeecm');
    if (keys?.length > 0) { controls.push({command: 'Charge ECM', keys: keys}); }

    return {name: 'Utilities', controls: controls};
  }
  
  /** UI / MENUS */
  uiFocusKey: string = 'root.uifocus';
  focusLeftPanelKey: string = 'root.focusleftpanel';
  focusCommsPanelkey: string = 'root.focuscommspanel';
  quickCommsPanelKey: string = 'root.quickcommspanel';
  focusRolePanelKey: string = 'root.focusradarpanel';
  focusRightPanelKey: string = 'root.focusrightpanel';
  toggleHeadlookKey: string = 'root.headlooktoggle';
}

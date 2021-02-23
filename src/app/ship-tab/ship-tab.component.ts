import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Find } from 'src/helpers/find';
import { Input } from 'src/helpers/input';
import { BindingsDataService } from '../bindings-data.service';

@Component({
  selector: 'app-ship-tab',
  templateUrl: './ship-tab.component.html',
  styleUrls: ['./ship-tab.component.css']
})
export class ShipTabComponent implements OnInit, OnDestroy, AfterViewChecked {
  bindings: Object;
  bindingsStr: string;
  subscription: Subscription;

  /** HEADING */
  yawKey: string = 'root.yawaxisraw';
  yawLeftKey: string = 'root.yawleftbutton';
  yawRightKey: string = 'root.yawrightbutton';
  rollKey: string = 'root.rollaxisraw';
  rollLeftKey: string = 'root.rollleftbutton';
  rollRightKey: string = 'root.rollrightbutton';
  pitchKey: string = 'root.pitchaxisraw';
  pitchUpKey: string = 'root.pitchupbutton';
  pitchDownKey: string = 'root.pitchdownbutton';
  /** MOVEMENT */
  lateralThrustKey: string = 'root.lateralthrustraw';
  leftThrustKey: string = 'root.leftthrustbutton';
  rightThrustKey: string = 'root.rightthrustbutton';
  verticalThrustKey: string = 'root.verticalthrustraw';
  upThrustKey: string = 'root.upthrustbutton';
  downThrustKey: string = 'root.downthrustbutton';
  aheadThrustKey: string = 'root.aheadthrust';
  forwardThrustKey: string = 'root.forwardthrustbutton';
  backwardThrustKey: string = 'root.backwardthrustbutton';
  /** THROTTLE */
  throttleKey: string = 'root.throttleaxis';
  forwardKey: string = 'root.forwardkey';
  backwardKey: string = 'root.backwardkey';
  speedMinus100Key: string = 'root.setspeedminus100';
  speedMinus75Key: string = 'root.setspeedminus75';
  speedMinus50Key: string = 'root.setspeedminus50';
  speedMinus25Key: string = 'root.setspeedminus25';
  speedZeroKey: string = 'root.setspeedzero';
  speed25Key: string = 'root.setspeed25';
  speed50Key: string = 'root.setspeed50';
  speed75Key: string = 'root.setspeed75';
  speed100Key: string = 'root.setspeed100';
  toggleFlightAssistKey: string = 'root.toggleflightassist';
  boostKey: string = 'root.useboostjuice';
  /** FLIGHT MISC. */
  toggleSilentRunningKey: string = 'root.togglebuttonupinput';
  toggleLightsKey: string = 'root.shipspotlighttoggle';
  radarRangeKey: string = 'root.radarrangeaxis';
  increaseRadarRangeKey: string = 'root.radarincreaserange';
  decreaseRadarRangeKey: string = 'root.radardecreaserange';
  pipsToEnginesKey: string = 'root.increaseenginespower';
  pipsToWeaponsKey: string = 'root.increaseweaponspower';
  pipsToSystemsKey: string = 'root.increasesystemspower';
  resetPipsKey: string = 'root.resetpowerdistribution';
  toggleCargoScoopKey: string = 'root.togglecargoscoop';
  ejectAllCargoKey: string = 'root.ejectallcargo';
  toggleLandingGearKey: string = 'root.landinggeartoggle';
  toggleNightVisionKey: string = 'root.nightvisiontoggle';
  /** HYPERSPACE / SUPERCRUISE */
  hyperSuperCombiKey: string = 'root.hypersupercombination';
  supercruiseKey: string = 'root.supercruise';
  hyperspaceKey: string = 'root.hyperspace';
  toggleOrbitLinesKey: string = 'root.orbitlinestoggle';
  enterFssKey: string = 'root.explorationfssenter';
  /** TARGETING */
  targetAheadKey: string = 'root.selecttarget';
  cycleNextTargetKey: string = 'root.cyclenexttarget';
  cyclePreviousTargetKey: string = 'root.cycleprevioustarget';
  selectHighestThreatKey: string = 'root.selecthighestthreat';
  cycleNextHostileTargetKey: string = 'root.cyclenexthostiletarget';
  cyclePreviousHostileTargetKey: string = 'root.cycleprevioushostiletarget';
  targetWingman0Key: string = 'root.targetwingman0';
  targetWingman1Key: string = 'root.targetwingman1';
  targetWingman2Key: string = 'root.targetwingman2';
  selectWingmansTargetKey: string = 'root.selecttargetstarget';
  wingNavLockKey: string = 'root.wingnavlock';
  cycleNextSubsystemKey: string = 'root.cyclenextsubsystem';
  cyclePreviousSubsystemKey: string = 'root.cycleprevioussubsystem';
  targetNextSystemInRouteKey: string = 'root.targetnextroutesystem';
  /** WEAPONS / TOOLS */
  primaryFireKey: string = 'root.primaryfire';
  secondaryFireKey: string = 'root.secondaryfire';
  cycleNextFireGroupKey: string = 'root.cyclefiregroupnext';
  cyclePreviousFireGroupKey: string = 'root.cyclefiregroupprevious';
  toggleHardpointsKey: string = 'root.deployhardpointstoggle';
  toggleHudModeKey: string = 'root.playerhudmodetoggle';
  /** UTILITIES */
  deployHeatsinkKey: string = 'root.deployheatsink';
  useShieldCellKey: string = 'root.useshieldcell';
  useChaffKey: string = 'root.firechafflauncher';
  chargeEcmKey: string = 'root.chargeecm';
  /** UI / MENUS */
  uiFocusKey: string = 'root.uifocus';
  focusLeftPanelKey: string = 'root.focusleftpanel';
  focusCommsPanelkey: string = 'root.focuscommspanel';
  quickCommsPanelKey: string = 'root.quickcommspanel';
  focusRolePanelKey: string = 'root.focusradarpanel';
  focusRightPanelKey: string = 'root.focusrightpanel';
  toggleHeadlookKey: string = 'root.headlooktoggle';  
  
  constructor(private dataSvc: BindingsDataService) { 

  }

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

  getBindingsFor(key: string): string[] {
    if (this.bindings) {
      let ctrl: Input = Find.gamePadInput(this.bindings, this[`${key}Key`]);
      if (ctrl) {
        return ctrl.keys.reverse();
      }
    }
    return [];
  }

  ngOnInit(): void {
    this.subscription = this.dataSvc.currentMessage.subscribe(message => this.updateBindings(message));
  }

  ngAfterViewChecked(): void {
    try {
      new Masonry('.masonry-grid');
    } catch (e) { /* ignore */ }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, HostBinding, Output, EventEmitter } from '@angular/core';
import { Storage } from '../../_storage/storage.service';
import { Clock } from '../../_shared/models/clock';
import { TimezoneService, Timezone } from './timezone.service';
import { SharedService } from '../../_shared/shared.service';
import { analogFaceStyles, analogHandStyles, span } from '../../_shared/lists/lists';

@Component({
  selector: 'options-time',
  templateUrl: 'time.component.html'
})
export class OptionsTimeComponent {
  @Output() goTo: EventEmitter<string> = new EventEmitter<string>();
  clock: Clock;
  showNew: Boolean = false;
  selected: number;
  clockType: string;
  allTimezones: Timezone[];
  tzGuess: string;
  analogFaceStyles = analogFaceStyles;
  analogHandStyles = analogHandStyles;
  span = span;
  @HostBinding('class') hostClass: string = 'panelPlateGroup';

  gmt = [
    {label: 'GMT-0', value: 'Etc/GMT-0'},
    {label: 'GMT-1', value: 'Etc/GMT-1'},
    {label: 'GMT-2', value: 'Etc/GMT-2'},
    {label: 'GMT-3', value: 'Etc/GMT-3'},
    {label: 'GMT-4', value: 'Etc/GMT-4'},
    {label: 'GMT-5', value: 'Etc/GMT-5'},
    {label: 'GMT-6', value: 'Etc/GMT-6'},
    {label: 'GMT-7', value: 'Etc/GMT-7'},
    {label: 'GMT-8', value: 'Etc/GMT-8'},
    {label: 'GMT-9', value: 'Etc/GMT-9'},
    {label: 'GMT-10', value: 'Etc/GMT-10'},
    {label: 'GMT-11', value: 'Etc/GMT-11'},
    {label: 'GMT-12', value: 'Etc/GMT-12'},
    {label: 'GMT-13', value: 'Etc/GMT-13'},
    {label: 'GMT-14', value: 'Etc/GMT-14'},
    {label: 'GMT+1', value: 'Etc/GMT+1'},
    {label: 'GMT+2', value: 'Etc/GMT+2'},
    {label: 'GMT+3', value: 'Etc/GMT+3'},
    {label: 'GMT+4', value: 'Etc/GMT+4'},
    {label: 'GMT+5', value: 'Etc/GMT+5'},
    {label: 'GMT+6', value: 'Etc/GMT+6'},
    {label: 'GMT+7', value: 'Etc/GMT+7'},
    {label: 'GMT+8', value: 'Etc/GMT+8'},
    {label: 'GMT+9', value: 'Etc/GMT+9'},
    {label: 'GMT+10', value: 'Etc/GMT+10'},
    {label: 'GMT+11', value: 'Etc/GMT+11'},
    {label: 'GMT+12', value: 'Etc/GMT+12'},
  ];

  constructor(
    public shared: SharedService,
    public settings: Storage,
    public tz: TimezoneService,
  ) {
    this.allTimezones = tz.getZones();
    this.tzGuess = this.shared.zoneGuess;
  }

  /** Track array by index */
  trackByFn(index: any, item: any) {
    return index;
  }

  getClockType(i: number): string {
    if (this.settings.config.time.clocks[i].analog.enabled) {
      return 'analog'
    } else if (this.settings.config.time.clocks[i].binary.enabled) {
      return 'binary'
    } else {
      return 'digital'
    }
  }

  /** Sets item as selected */
  setSelected(i: number) {
    if (this.selected !== i) {
      this.selected = i;
      this.clockType = this.getClockType(i);
      this.shared.optionsPage = 'EditClock';
    } else {
      this.selected = null;
      this.clockType = this.getClockType(i);
      this.shared.optionsPage = 'Time';
    }
  }

  setClockType(i: number) {
    if (this.clockType === 'analog') {
      this.settings.config.time.clocks[i].analog.enabled = true;
      this.settings.config.time.clocks[i].binary.enabled = false;
    } else if (this.clockType === 'binary') {
      this.settings.config.time.clocks[i].analog.enabled = false;
      this.settings.config.time.clocks[i].binary.enabled = true;
    } else {
      this.settings.config.time.clocks[i].analog.enabled = false;
      this.settings.config.time.clocks[i].binary.enabled = false;
    }

  }

  /** Adds new clock */
  add() {
    this.settings.config.time.clocks.push(new Clock());
    let i = (this.settings.config.time.clocks.length - 1);
    this.shared.toggleOrder(this.settings.config.time.clocks[i].id, true, 'c');
  }

  /** Deletes clock */
  delete(index: number) {
    if (confirm('Are you sure you want to delete this clock?')) {
      this.shared.toggleOrder(this.settings.config.time.clocks[index].id, false, this.settings.config.time.clocks[index].position);
      this.settings.config.time.clocks.splice(index, 1);
    } else {
      return;
    }
  }

  copy(index: number) {
    let newClock: Clock = JSON.parse(JSON.stringify(this.settings.config.time.clocks[index]));
    newClock.id = this.shared.createID('CLOCK');
    this.settings.config.time.clocks.push(newClock);
    let i = (this.settings.config.time.clocks.length - 1);
    this.shared.toggleOrder(this.settings.config.time.clocks[i].id, true, this.settings.config.time.clocks[index].position);
    this.selected = null;
    this.clockType = null;
  }

  findSpan(s): string {
    return span.find(item => item.id === s).label;
  }

}

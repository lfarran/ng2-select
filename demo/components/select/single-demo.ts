import { Component } from '@angular/core';

// webpack html imports
let template = require('./single-demo.html');

@Component({
  selector: 'single-demo',
  template
})
export class SingleDemoComponent {
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  public previousValue: any;
  public formActive: boolean = true;

  private value:Array<any> = [{text: 'Nothing Selected'}];
  private _disabledV:string = '0';
  private disabled:boolean = false;

  /**
   * TODO: LBF 12/20/16
   * @returns {string}
   */
  public get placeholderText(): string {
    return this.value[0]  ? this.value[0].text : '';
  }

  public getValue(): Array<any> {
    console.log('getValue:', this.value[0].text);
    return this.value;
  }

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Demo Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Demo Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('Demo New search input: ', value);
  }

  public refreshValue(value:any):void {
    console.log('Demo refreshValue:', value);
    this.previousValue = this.value[0];
    this.value[0] = value;
  }

  // TODO: LBF 12/20/16
  public resetValue(): void {
    this.formActive = false;
    setTimeout(() => {
      this.value[0] = this.previousValue;
      console.info('demo refreshValue():', this.value[0]);
      this.selected(this.value[0]);
    }, 0);

    this.formActive = true;
  }
}

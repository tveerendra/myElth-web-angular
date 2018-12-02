import { Component, OnInit, Input } from '@angular/core';
import { getNestedObject } from '../../../common/utils';

@Component({
  selector: 'app-gaugechart',
  templateUrl: './gaugechart.component.html',
  styleUrls: ['./gaugechart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  @Input() gaugeData : any;

  maxValue : number = 2000;
  usedValue : number = 667;
  remainingValue : string = '';
  view : any[] = [555, 250]
  data : any[] = [
    {
      "name": "Total Amount",
      "value": this.maxValue
    },
    {
      "name": "Used Amount",
      "value": this.usedValue
    }
  ];
  colorScheme : any = {
    domain: ['#17A2B8', '#C7B42C']
  };
  showLegend : boolean = false;
  gaugeMin : number = 0;
  gaugeMax : number = this.maxValue;
  gaugeUnits : string = 'Units - $';
  gaugeAngleSpan : number = 180;
  gaugeStartAngle : number = -90;
  gaugeTextValue : string = '';
  legendTitle : string = 'Deductibles2';
  marginTop : number = 40;
  marginRight : number = 0;
  marginBottom : number = -20; 
  marginLeft : number = -220;
  //[marginTop, marginRight, marginBottom, marginLeft]
  margin : [number, number, number, number] = [this.marginTop, this.marginRight, this.marginBottom, this.marginLeft];
  tooltipDisabled : boolean = false;
  gaugeShowAxis : boolean = true;
  animations : boolean = true;
  gaugeLargeSegments : number = 4;
  gaugeSmallSegments : number = 4;

  constructor() { 
    this.gaugeTextValue = 'Remaining $' + (this.maxValue - this.usedValue);
  }

  ngOnInit() {
    console.log('gaugeData : ' + JSON.stringify(this.gaugeData));
    var total = getNestedObject(this.gaugeData, ['inNetwork', 'FAM', 0, 'total']);
    var remaining = getNestedObject(this.gaugeData, ['inNetwork', 'FAM', 0, 'remaining']);
    this.maxValue = total;
    this.remainingValue = remaining;
  }

}

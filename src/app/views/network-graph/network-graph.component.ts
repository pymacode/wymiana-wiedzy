import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import 'anychart';

declare var anychart: any;

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss'],
})
export class NetworkGraphComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  inputData = [
    ['Chloe', 10000],
    ['Killua', 12000],
    ['Peter', 13000],
    ['Johann', 10000],
    ['Dio', 9000],
  ];

  chart!: anychart.charts.Cartesian;

  constructor() {}

  ngOnInit(): void {
    // create a chart
    this.chart = anychart.column();

    // create a column series and set the data
    var series = this.chart.column(this.inputData);

    // set the container id
    this.chart.container('chartContainer');

    // initiate drawing the chart
    this.chart.draw();
  }
}

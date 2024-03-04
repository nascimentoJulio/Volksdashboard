import { Component, Input, input } from '@angular/core';
import { ChartDetails } from '../../models/chart-detail';
import {
  NgApexchartsModule
} from "ng-apexcharts";
import { Car } from '../../models/Car';



@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {


}

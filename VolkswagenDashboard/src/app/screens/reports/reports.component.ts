import { Component } from '@angular/core';
import { ChartsComponent } from '../../components/charts/charts.component';
import { ApiService } from '../../services/api.service';
import { Car } from '../../models/Car';
import { ChartDetails } from '../../models/chart-detail';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Resolve } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent{

  data!: Car[]
  constructor (private apiService: ApiService){}
  years: number[] = []

  ngOnInit(): void {
    this.apiService.getCars().subscribe(response=> {  
      this.data = response.body || []
      this.data = this.data.sort((a,b) => a.id - b.id)
      this.years = response.body?.map(car => car.dateRelease) || []
    })     
  }

  
  chart: ChartDetails = {
    title: 'Lançamento de carros por ano',
    categories: this.years.map(x => x.toString()),
    series: [{
      name: "Carros por ano",
      data: [...this.years]
    }]
  }
  series = [
    ...this.chart.series
  ]
  charts: any = {
    height: 350,
    type: "bar"
  }
  title: any = {
    text: this.chart.title
  }
  xaxis: any = {
    categories: this.chart.categories
  }
}

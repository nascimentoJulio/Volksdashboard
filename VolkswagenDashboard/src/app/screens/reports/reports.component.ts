import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ChartsComponent } from '../../components/charts/charts.component';
import { ApiService } from '../../services/api.service';
import { Car } from '../../models/Car';
import { ChartDetails } from '../../models/chart-detail';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit, AfterContentInit{

  data!: Car[]
  constructor(private apiService: ApiService) { }

  years: number[] = []
  chart!: ChartDetails
  ngOnInit(): void {
    this.apiService.getCars().subscribe(response => {
      this.data = response.body || []
      this.data = this.data.sort((a, b) => a.id - b.id)
      this.years = response.body?.map(car => car.dateRelease) || []
      this.series = [{
        name: 'Carros por anos',
        data: [...getCarsByYears(this.years)]
      }]

      this.xaxis = {
        categories: [...new Set(this.years.map(x => x.toString()))]
      }
    })

  }


  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }


  series!: any
  charts: any = {
    height: 350,
    type: "bar"
  }
  title: any = {
    text: 'Lançamento de carros por ano'
  }
  xaxis!: any 
}

function getCarsByYears(yearsArray: number[]) {
  const count = yearsArray.reduce((acc: any, year: number) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  console.log(Object.entries(count).map(([_, value]) => value));
  
  return Object.entries(count).map(([_, value]) => value);
}

 


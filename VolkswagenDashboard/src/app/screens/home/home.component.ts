import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../../services/api.service';
import { Car } from '../../models/Car';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  name: string =  'Afonso'
  className = 'th-table'
  cars!: any[]

  constructor (private apiService: ApiService, private changeDetector: ChangeDetectorRef){ }
  
  ngOnInit(): void {
    this.apiService.getCars().subscribe(response=> {  
      this.cars = response.body || []
      this.cars = this.cars.sort((a,b) => a.id - b.id)
    })     
  }

  changeClass(index: number){
    this.className = index % 2 === 0 ? 'custom-line' : ''
  }
  displayedColumns: string[] = ['ID', 'NOME', 'ANO'];
}

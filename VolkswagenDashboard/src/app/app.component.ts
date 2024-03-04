import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './components/charts/charts.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgApexchartsModule, ChartsComponent,  MatSidenavModule, MatCheckboxModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  events: string[] = [];
  opened!: boolean;

}

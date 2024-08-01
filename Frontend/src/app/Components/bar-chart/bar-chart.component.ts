import { Component, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SimulationOutput } from 'src/app/Models/simulation-output.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @Input() simulationOutput: SimulationOutput | null = null;

  public barChartLabels: string[] = ['Wins', 'Losses'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Probabiliy',
          color: 'black'
        },
        ticks: {
          color: 'black'
        },
        grid: {
          display: false,
        }
      },
      y: {
        title: {
          display: true,
          text: 'percentage (%)',
          color: 'black',
        },
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)' // Adjust the grid line color
        },
        ticks: {
          stepSize: 25,
          color: 'black'
        },
        min: 0,
        max: 100,
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'black'
        }
      }
    }
  };

  public barChartData: { data: number[]; label: string; backgroundColor: string[]; hoverBackgroundColor: string[]; barPercentage: number; catagoryPercentage: number }[] = [];

  ngOnChanges() {
    this.updateChartData();
  }

  private updateChartData(): void {
    if (this.simulationOutput) {
      this.barChartData = [
        { 
          data: [this.simulationOutput.winRate, this.simulationOutput.lossRate], 
          label: 'Switch Doors', 
          backgroundColor: ['#9733EE', '#9733EE'], 
          hoverBackgroundColor: ['#b775f0'],
          barPercentage: 1,
          catagoryPercentage: 0.8
        },
        { 
          data: [100 - this.simulationOutput.winRate, 100 - this.simulationOutput.lossRate], 
          label: 'Not Switching Doors', 
          backgroundColor: ['grey', 'grey'], 
          hoverBackgroundColor: ['white'],
          barPercentage: 1,
          catagoryPercentage: 0.8
        }
      ];
    }
  }
}

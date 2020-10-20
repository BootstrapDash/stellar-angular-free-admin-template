import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})
export class ChartistComponent implements OnInit {

  // Simple line chart
  chartistLineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  }

  chartistLineOptions = {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
  }

  // Line scatterer
  times = function(n) {
    return Array.apply(null, new Array(n));
  };

  data = this.times(52).map(Math.random).reduce(function(data, rnd, index) {
    data.labels.push(index + 1);
    for (var i = 0; i < data.series.length; i++) {
      data.series[i].push(Math.random() * 100)
    }
    return data;
  }, {
    labels: [],
    series: this.times(4).map(function() {
      return new Array()
    })
  });

  chartistLineScatterData = this.data;

  chartistLineScatterOptions = {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 13 === 0 ? 'W' + value : null;
      }
    }
  }

  // Stacked bar chart
  chartistBarData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      ['800000', '1200000', '1400000', '1300000'],
      ['200000', '400000', '500000', '300000'],
      ['100000', '200000', '400000', '600000'],
      ['400000', '600000', '200000', '0000']
    ]
  }

  chartistBarOptions = {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    }
  }

  // Horizontal bar chart
  chartistBarHorizontalData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        [5, 4, 3, 7, 5, 10, 3],
        [3, 2, 9, 5, 4, 6, 4],
        [2, 6, 7, 1, 3, 5, 9],
        [2, 6, 7, 1, 3, 5, 19],
      ]
    }

  chartistBarHorizontalOptions = {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 20
    },
    axisX: {
      labelOffset: {
        x: 0,
        y: 6
      },
    },
    chartPadding: {
      left: 20,
      bottom: 20
    }
  }

  // Pie chart
  chartistPieData = {
    series: [5, 3, 4]
  }

  // Donut chart
  sum = function(a, b) {
    return a + b
  };

  chartistDonutData = {
    labels: ['safari', 'chrome', 'explorer', 'firefox'],
    series: 
      [20, 40, 10, 30]
  }

  chartistDonutOptions = {
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  }

  constructor() { }

  ngOnInit() {
  }

}

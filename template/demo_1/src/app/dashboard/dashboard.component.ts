import { Component, OnInit, ViewChild } from '@angular/core';
import { FixedScaleAxis } from 'chartist';
import { NgbDate, NgbCalendar, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggleProBanner(event) {
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }
  @ViewChild('d', {static: false}) datepicker: NgbInputDatepicker;

// Performance indicator chart
  performanceIndicatorBarchartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [30, 25, 50, 25, 50, 25, 50, 55, 20, 35, 25, 30 ],
      [25, 50, 10, 35, 30, 15, 20, 20, 30, 25, 10, 15 ],
      [45, 25, 40, 40, 20, 60, 30, 25, 50, 40, 65, 55 ]
    ]
  };

  performanceIndicatorBarchartOptions = {
    stackBars: true,
            height: 200,
            axisY: {
              type: FixedScaleAxis,
              ticks: [0, 25, 50, 75, 100]
            },
            showGridBackground: false
  };

  performanceIndicatorBarchartResponsiveOptions = [
    ['screen and (max-width: 480px)', {
      height: 150,
    }]
  ];

  // Sessions by channel doughnut chart

  doughnutPieData = [{
    data: [55, 25, 20],
    backgroundColor: [
        '#ffca00',
        '#38ce3c',
        '#ff4d6b'
    ],
    borderColor: [
      '#ffca00',
      '#38ce3c',
      '#ff4d6b'
    ],
  }];

  doughnutPieLabels: [
    'Reassigned',
    'Not Assigned',
    'Assigned'
  ];
  doughnutPieOptions = {
    cutoutPercentage: 75,
    animationEasing: 'easeOutBounce',
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
        display: false
    },
    layout: {
      padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      }
    }
  };

  // Income expense chart date range picker properties

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
  onFirstSelection: boolean = true;

  // Income expense chart

  incomeExpenseSummaryChartData = {
    // A labels array that can contain any sort of values
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [505, 781, 480, 985, 410, 822, 388, 874, 350, 642, 320, 796],
      [700, 430, 725, 390, 686, 392, 757, 500, 820, 400, 962, 420]
    ]
  };

  incomeExpenseSummaryChartOptions = {
    height: 300,
    axisY: {
      high: 1000,
      low: 250,
      referenceValue: 1000,
      type: FixedScaleAxis,
      ticks: [250, 500, 750, 1000]
    },
    showArea: true,
    showPoint: false,
    fullWidth: true
  };

  incomeExpenseSummaryChartResponsiveOptions = [
    ['screen and (max-width: 480px)', {
      height: 150,
      axisX: {
        labelInterpolationFnc: (value) => value,
      }
    }]
  ];

  // Income expense chart date range picker methods

  onDateSelection(date: NgbDate) {
    console.log(date);
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.onFirstSelection = false;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.onFirstSelection = true;
      this.datepicker.close();
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.onFirstSelection = false;
    }
  }

  toNativeDate(date:NgbDate) {
    if(date){
      return new Date(date.year, date.month, date.day);
    }else {
      return "";
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
  }

  style = {
    sources: {
      world: {
        type: "geojson",
        data: "assets/world.geo.json"
      }
    },
    version: 8,
    layers: [
      {
        "id": "countries-fill",
        "type": "fill",
        "source": "world",
        "layout": {},
        "paint": {
          'fill-color': '#000000',
        },
      },
      {
        "id": "countries-border",
        "type": "line",
        "source": "world",
        "layout": {},
        "paint": {
          'line-color': '#ffffff',
        },
      }
    ]
  }

}
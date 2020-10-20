import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,  './assets/i18n/');
}

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ChartsModule,
    ChartistModule,
    NgbModule,
    NgxMapboxGLModule,
    NgCircleProgressModule.forRoot({
      responsive: true,
      space: -10,
      innerStrokeColor: '#eee',
      innerStrokeWidth: 10,
      radius: 60,
      animation: true,
      animationDuration: 300,
      outerStrokeWidth: 10,
      title: 'auto',
      titleFontSize: '30px',
      titleFontWeight: 'bold',
      subtitleFontSize: '12px',
      subtitleColor: '#a7afb7',
      showUnits: false,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }})
  ]
})
export class DashboardModule { }

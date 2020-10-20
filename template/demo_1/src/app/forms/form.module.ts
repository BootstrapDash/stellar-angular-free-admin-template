import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { RouterModule, Routes } from '@angular/router';
// import { Select2Module } from 'ng2-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


const routes: Routes = [
  { path: 'basic-elements', component: BasicElementsComponent },
]

@NgModule({
  declarations: [BasicElementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Select2Module,
    NgbModule,
    NgSelectModule
  ],
  providers: []
})
export class FormModule { }

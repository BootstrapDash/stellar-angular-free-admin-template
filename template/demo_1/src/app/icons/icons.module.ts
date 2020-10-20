import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MdiComponent } from './mdi/mdi.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';

const routes : Routes = [
  { path: 'mdi', component: MdiComponent },
  { path: 'flag-icons', component: FlagIconsComponent },
]

@NgModule({
  declarations: [MdiComponent, FlagIconsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class IconsModule { }

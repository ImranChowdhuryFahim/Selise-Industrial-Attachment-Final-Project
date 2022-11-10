import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from '../card/card.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    MatProgressBarModule,
  ],
})
export class DashboardModule { }

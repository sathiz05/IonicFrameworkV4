import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorizondalScrollPage } from './horizondal-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: HorizondalScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorizondalScrollPage]
})
export class HorizondalScrollPageModule {}

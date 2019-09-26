import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurdWidthNodePage } from './curd-width-node.page';
// import { UserDetailModalPageModule } from '../user-detail-modal/user-detail-modal.module';

const routes: Routes = [
  {
    path: '',
    component: CurdWidthNodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // UserDetailModalPageModule
  ],
  declarations: [CurdWidthNodePage]
})
export class CurdWidthNodePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageNavTypesPage } from './page-nav-types.page';

const routes: Routes = [
  {
    path: '',
    component: PageNavTypesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageNavTypesPage]
})
export class PageNavTypesPageModule {}

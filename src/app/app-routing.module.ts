import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/canActivate/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'page-nav-types', loadChildren: './page-nav-types/page-nav-types.module#PageNavTypesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'alert-types', loadChildren: './alert-types/alert-types.module#AlertTypesPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'curd-width-node', loadChildren: './curd-width-node/curd-width-node.module#CurdWidthNodePageModule', canActivate: [AuthGuardService] },
  { path: 'user-detail-modal', loadChildren: './user-detail-modal/user-detail-modal.module#UserDetailModalPageModule', canActivate: [AuthGuardService] },
  { path: 'upload-document', loadChildren: './upload-document/upload-document.module#UploadDocumentPageModule', canActivate: [AuthGuardService] },
  { path: 'image-list', loadChildren: './image-list/image-list.module#ImageListPageModule' },
  { path: 'horizondal-scroll', loadChildren: './horizondal-scroll/horizondal-scroll.module#HorizondalScrollPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
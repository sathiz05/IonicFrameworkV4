import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/GlobalService/global.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any = [
    { title: 'Page Navigation Types', path: '/page-nav-types' },
    { title: 'Alert Types', path: '/alert-types' },
    { title: 'CRUD Operation With Node', path: '/login' },
    { title: 'Horizandal Scroll Types', path: '/horizondal-scroll' }
  ];
  constructor(
    public route: Router,
    public routeParam: ActivatedRoute,
    public globalService: GlobalService,
    private menu: MenuController
  ) {
  }

  ionViewDidEnter() {
    this.menu.enable(false);
    this.routeParam.params.subscribe(params => {
      if (this.globalService.isObjNull(params) > 0) {
        console.log(`${params.data}`);
      }
    });

    this.routeParam.queryParams.subscribe(params => {
      if (this.globalService.isObjNull(params) > 0) {
        console.log(`${params.data}`);
      }
    });
  }
}

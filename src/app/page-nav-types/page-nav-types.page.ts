import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-page-nav-types',
  templateUrl: './page-nav-types.page.html',
  styleUrls: ['./page-nav-types.page.scss'],
})
export class PageNavTypesPage implements OnInit {
  listArr: any = [
    { title: 'Navigate using router', path: '/home' },
    { title: 'Navigate using router with orbitary data Type1', path: '/home' },
    { title: 'Navigate using router with orbitary data Type2', path: '/home' }
  ];
  constructor(public routeParam: ActivatedRoute, public route: Router) {}

  navigationFn(item, index) {
    if (index == 1) {
      this.route.navigate([item.path]);
    } else if (index == 2) {
      this.route.navigate([item.path, { data: "welcome Home page from Page navigation type 1" }]);
    } else {
      let navigationExra: NavigationExtras = {
        queryParams: {
          data: "welcome Home page from Page navigation type 2"
        }
      }
      this.route.navigate([item.path],navigationExra);
    }
  }

  ngOnInit() {}

}

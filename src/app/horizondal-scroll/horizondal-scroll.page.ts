import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-horizondal-scroll',
  templateUrl: './horizondal-scroll.page.html',
  styleUrls: ['./horizondal-scroll.page.scss'],
})
export class HorizondalScrollPage implements OnInit {

  isShown :boolean = true;
  items: any = [{
    url: 'https://www.gstatic.com/webp/gallery3/1.png'
  },
  {
    url: 'https://www.gstatic.com/webp/gallery/1.jpg'

  },
  {
    url: 'https://www.gstatic.com/webp/gallery3/2.png'

  },
  {
    url: 'https://www.gstatic.com/webp/gallery3/3.png'

  }
  ];
  itemsI = [];


  data: any = [
    {
      category: "Pizza",
      expanded: true,
      products: [
        { id: 0, name: 'Salami', price: '0' },
        { id: 1, name: 'Classic', price: '0' },
        { id: 2, name: 'Tuna', price: '0' },
        { id: 3, name: 'Hawai', price: '0' }
      ]
    }
  ];
  sliderConfig = {
    spaceBetween: 10,
    centerdSlide: true,
    slidesPerView: 1.6
  }
  products = [
    { id: 0, name: 'Salami', price: '0' },
    { id: 1, name: 'Classic', price: '0' },
    { id: 2, name: 'Tuna', price: '0' },
    { id: 3, name: 'Hawai', price: '0' }
  ]
  constructor() {
    for (let i = 0; i < 30; i++) {
      this.itemsI.push(this.items.length);
    }

    setTimeout(()=>{
      this.isShown = false;
    },1000);
  }

  ngOnInit() {
  }

  loadMore(event) {
    console.log("hi");
    event.target.complete();
  }

  doInfinite(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.itemsI.push(this.items.length);
      }

      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }

  onScrollStart(){
    console.log("scroll start");
  }

  onScroll()
  {
    alert("hi")
  }


}

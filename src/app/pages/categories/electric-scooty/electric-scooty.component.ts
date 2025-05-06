import { Component } from '@angular/core';

@Component({
  selector: 'app-electric-scooty',
  templateUrl: './electric-scooty.component.html',
  styleUrls: ['./electric-scooty.component.scss']
})
export class ElectricScootyComponent {
  electricScooties = [
    {
      name: 'Electric Scooty Model 1',
      image: 'https://example.com/electric-scooty1.jpg'
    },
    {
      name: 'Electric Scooty Model 2',
      image: 'https://example.com/electric-scooty2.jpg'
    },
    {
      name: 'Electric Scooty Model 3',
      image: 'https://example.com/electric-scooty3.jpg'
    }
  ];

  buyNow(electricScooty: any) {
    alert(`You clicked Buy Now for ${electricScooty.name}`);
  }

  makePayment(electricScooty: any) {
    alert(`You clicked Payment for ${electricScooty.name}`);
  }
}

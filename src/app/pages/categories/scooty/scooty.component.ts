import { Component } from '@angular/core';

@Component({
  selector: 'app-scooty',
  templateUrl: './scooty.component.html',
  styleUrls: ['./scooty.component.scss']
})
export class ScootyComponent {
  scooties = [
    {
      name: 'Scooty Model 1',
      image: 'https://example.com/scooty1.jpg'
    },
    {
      name: 'Scooty Model 2',
      image: 'https://example.com/scooty2.jpg'
    },
    {
      name: 'Scooty Model 3',
      image: 'https://example.com/scooty3.jpg'
    }
  ];

  buyNow(scooty: any) {
    alert(`You clicked Buy Now for ${scooty.name}`);
  }

  makePayment(scooty: any) {
    alert(`You clicked Payment for ${scooty.name}`);
  }
}

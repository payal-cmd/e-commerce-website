import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../../shared/popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent {
  bikes = [
    {
      name: 'Bike Model 1',
      image: 'https://example.com/bike1.jpg'
    },
    {
      name: 'Bike Model 2',
      image: 'https://example.com/bike2.jpg'
    },
    {
      name: 'Bike Model 3',
      image: 'https://example.com/bike3.jpg'
    }
  ];

  constructor(private dialog: MatDialog) {}

  buyNow(bike: any) {
    this.dialog.open(PopupDialogComponent, {
      data: { message: `You clicked Buy Now for ${bike.name}` }
    });
  }

  makePayment(bike: any) {
    this.dialog.open(PopupDialogComponent, {
      data: { message: `You clicked Payment for ${bike.name}` }
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  template: `
    <h2>Our Location</h2>
    <iframe
      width="600"
      height="450"
      style="border:0"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=SIYARAM+AUTO">
    </iframe>
  `
})
export class LocationComponent { }

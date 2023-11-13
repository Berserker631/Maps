import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent {
  constructor(private placesService: PlacesService) {
    console.log(placesService);
  }

  get isUserLocationReady() {
    return this.placesService.IsUserLocationReady;
  }
}

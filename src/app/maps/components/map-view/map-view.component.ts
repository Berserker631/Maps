import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef
  constructor(private placeService: PlacesService) {
    console.log(placeService.userLocation);
  }

  ngAfterViewInit(): void {
    if (!this.placeService.userLocation) { throw Error("No hay placesService.userLocation") }
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placeService.userLocation,
      zoom: 15, // starting zoom
    });

    const popup = new Popup().setHTML(`<h6>Aqui estoy</h6><span>🌱</span>`);
    new Marker({ color: 'red' })
      .setLngLat(this.placeService.userLocation)
      .setPopup(popup)
      .addTo(map)
  }
}

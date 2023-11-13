import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import mapboxgl, { Map, Popup, Marker } from 'mapbox-gl';
import { Coordinates } from '../../interfaces/interface';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements AfterViewInit {
  coordinates!: Coordinates[];
  @ViewChild('mapDiv') mapDivElement!: ElementRef;
  constructor(private placeService: PlacesService) {}

  ngAfterViewInit(): void {
    if (!this.placeService.userLocation) {
      throw Error('No hay placesService.userLocation');
    }
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placeService.userLocation,
      zoom: 15,
    });

    this.coordinates = [
      { lng: -70.667937, lat: 19.418765, description: "Ner Aguilar"},
      { lng: -70.692384, lat: 19.474523, description: "Pamela Ovalles"},
      { lng: -70.663757, lat: 19.409488, description: "Hickory Industries"},
      { lng: -70.662958, lat: 19.417342, description: "David Suarez"},
      { lng: -70.661483, lat: 19.419744, description: "Frederick Rodriguez"},
      { lng: -70.690993, lat: 19.454069, description: "Justin Westbrook"},
    ];

    for (var i = 0; i < this.coordinates.length; i++) {
      const popup = new Popup().setHTML(
        `<h6>${this.coordinates[i].description}</h6><span>🌱</span>`
      );
      const marker = new mapboxgl.Marker({color: 'red', scale: 0.5, draggable: true})
        .setLngLat([this.coordinates[i].lng, this.coordinates[i].lat])
        .setPopup(popup)
        .addTo(map);
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public userLocation: [number, number] | undefined;
  public isLoading: boolean | undefined;

  get IsUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve(this.userLocation)
        }, (error) => {
          alert('No se pudo obtener la geolocalizacion')
          console.log(error);
          reject();
        }
      )
    });
  }
  constructor() {
    this.getUserLocation();
  }
}

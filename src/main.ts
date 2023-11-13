import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoibmVyYWciLCJhIjoiY2xvdWNleGxvMGdsbDJqcXVseTExd285aCJ9.KYQcmTtNb-WMQrqSRUqONg';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if (!navigator.geolocation) {
  alert('Navegador no soporta GeoLocation');
  throw new Error('Navegador no soporta GeoLocation');
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { HickoryLogoComponent } from './components/hickory-logo/hickory-logo.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    HickoryLogoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-hickory-logo',
  templateUrl: './hickory-logo.component.html',
  styleUrls: ['./hickory-logo.component.scss']
})
export class HickoryLogoComponent {
  active: boolean | undefined = false;

  animateLogo() {
    this.active = !this.active;
  }
}

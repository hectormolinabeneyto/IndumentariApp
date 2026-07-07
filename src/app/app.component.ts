import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  cutOutline,
  manOutline,
  womanOutline,
  happyOutline,
  playCircleOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Telas y Tejidos', url: '/telas-tejidos', icon: 'cut-outline' },
    { title: 'Hombre', url: '/hombre', icon: 'man-outline' },
    { title: 'Mujer', url: '/mujer', icon: 'woman-outline' },
    { title: 'Niño/a', url: '/ninos', icon: 'happy-outline' },
    { title: 'Tutoriales', url: '/tutoriales', icon: 'play-circle-outline' },
  ];

  constructor() {
    addIcons({
      'home-outline': homeOutline,
      'cut-outline': cutOutline,
      'man-outline': manOutline,
      'woman-outline': womanOutline,
      'happy-outline': happyOutline,
      'play-circle-outline': playCircleOutline,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    this.setStatusBarTheme();

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.setStatusBarTheme(e.matches);
      });
  }

  async setStatusBarTheme(
    isDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    if (isDark) {
      await StatusBar.setBackgroundColor({ color: '#101E29' });
      await StatusBar.setStyle({ style: Style.Dark });
    } else {

      await StatusBar.setBackgroundColor({ color: '#ffffff' });
     await StatusBar.setStyle({ style: Style.Light });
    }
  }
}

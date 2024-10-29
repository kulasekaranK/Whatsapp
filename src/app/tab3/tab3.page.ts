import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, cameraOutline, ellipsisVertical } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonBadge, IonLabel,IonThumbnail } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonLabel, IonBadge, IonItem, IonContent, IonButton, IonButtons, IonTitle, IonToolbar, IonHeader,IonThumbnail ],
})
export class Tab3Page {
  constructor() {
    addIcons({ cameraOutline, ellipsisVertical });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  home,
  cameraOutline,
  search,
  ellipsisVertical,
  heart,
  arrowBackOutline,
  callOutline,
  arrowForwardOutline,
  videocamOutline,
} from 'ionicons/icons';
import { IonHeader, IonContent, IonLabel, IonButton, IonButtons, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonList, IonItem, IonAvatar, IonFab, IonFabButton, IonNote, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonText, IonNote, IonFabButton, IonFab, IonAvatar, IonItem, IonList, IonIcon, IonCol, IonRow, IonGrid, IonToolbar, IonTitle, IonButtons, IonButton, IonLabel, IonContent, IonHeader,
    CommonModule,
    FormsModule,
  ],
})
export class Tab4Page {
  constructor() {
    addIcons({
      cameraOutline,
      search,
      ellipsisVertical,
      heart,
      arrowBackOutline,
      callOutline,
      videocamOutline,
      arrowForwardOutline,
    });
  }
}

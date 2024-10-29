import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonIcon, IonItem, IonItemDivider, IonAvatar, IonList, IonButtons, IonButton, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButton, IonButtons, IonList, IonAvatar, IonItemDivider, IonItem, IonIcon, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage  {

  constructor() { }



}

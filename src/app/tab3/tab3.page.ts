import { Component, ViewChild, viewChild } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, cameraOutline, ellipsisVertical } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonBadge, IonLabel,IonThumbnail, IonPopover, IonList } from "@ionic/angular/standalone";
import { CapacitorService } from '../services/capacitor.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonPopover,
    IonLabel,
    IonBadge,
    IonItem,
    IonContent,
    IonButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonThumbnail,
    RouterLink
  ],
})
export class Tab3Page {
  @ViewChild('popover') popover!: IonPopover;
  constructor(private service: CapacitorService) {
    addIcons({ cameraOutline, ellipsisVertical });
  }
  camera() {
    this.service.takePhoto();
  }
  presentPopover(e: Event) {
    this.popover.event = e;
    this.popover.present();
  }
}

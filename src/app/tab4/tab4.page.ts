import { Component, OnInit, ViewChild } from '@angular/core';
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
import { IonHeader, IonContent, IonLabel, IonButton, IonButtons, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonList, IonItem, IonAvatar, IonFab, IonFabButton, IonNote, IonText, IonPopover } from "@ionic/angular/standalone";
import { CapacitorService } from '../services/capacitor.service';
import { every } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonPopover,
    IonText,
    IonNote,
    IonFabButton,
    IonFab,
    IonAvatar,
    IonItem,
    IonList,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonLabel,
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    RouterLink
  ],
})
export class Tab4Page {
  @ViewChild('popover') popover!:IonPopover;
  constructor(private service: CapacitorService) {
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
  camera() {
    this.service.takePhoto();
  }
  presentPopover(e:Event){
    this.popover.event = e;
    this.popover.present();
  }
}

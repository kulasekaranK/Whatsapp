import { Component, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemDivider,
  IonNote,
  IonFab,
  IonFabButton,
  IonPopover,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import {
  home,
  cameraOutline,
  ellipsisVertical,
  search,
  time,
  chatbubbleEllipsesSharp,
  cameraSharp,
  pencilSharp,
} from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CapacitorService } from '../services/capacitor.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonItemDivider,
    IonNote,
    IonFab,
    IonFabButton,
    FormsModule,
    CommonModule,
    IonPopover,
    RouterLink
  ],
})
export class Tab2Page {
  @ViewChild('popover') popover!: IonPopover;

  constructor(private service: CapacitorService) {
    addIcons({
      cameraOutline,
      search,
      ellipsisVertical,
      pencilSharp,
      cameraSharp,
      chatbubbleEllipsesSharp,
    });
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.popover.present();
  }

  camera() {
    this.service.takePhoto();
  }
  channels = [
    {
      name: 'Behind Talkies',
      profile:
        'https://pbs.twimg.com/profile_images/1491336405343113216/6jEDP_f-_400x400.jpg',
    },
    {
      name: 'Whatsapp',
      profile:
        'https://www.pc-tablet.co.in/wp-content/uploads/2024/04/WhatsApp-Enhances-User-Connectivity-with-Innovative-Status-Update-Features.png',
    },
    {
      name: 'Total Gaming',
      profile:
        'https://pbs.twimg.com/profile_images/1772918559426969600/wj4GbNeL_400x400.jpg',
    },
    {
      name: 'No One Cares',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B5TgKu5U-1CH4YWVwqzZzHJ5sm2dG7IaFw&s',
    },
    {
      name: 'ABP News',
      profile:
        'https://static.vidgyor.com/player/account/abp/img/ABP-Hindi.png',
    },
    {
      name: 'Cravings',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBVAwmZOTqP81gyyWF-IhDe7hvkHGFQz3Bw&s',
    },
  ];

  status = [
    {
      name: 'Sam',
      time: '31 minutes ago',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4TqRWJ_aAC_zzsEfk0Skhatjmku26Iypgw&s',
    },
    {
      name: 'Vicky',
      time: '10:47 am',
      avatar:
        'https://cdn4.sharechat.com/33d5318_1c8/compressed_gm_40_img_217358_2cc2fd4c_1716779215899_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=899_sc.jpg',
    },
    {
      name: 'Ariram',
      time: '9:46 am',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGssPtL2TPE0emzYc91xQ_96YUjJY5uJWFg&s',
    },
    {
      name: 'Guna',
      time: '9:38 am',
      avatar:
        'https://cdn4.sharechat.com/33d5318_1c8/key_frames/3b53ce3b_17150388141_1715038901421_keyframe_00_00.jpg?tenant=sc&referrer=pwa-sharechat-service&f=_00_00.jpg',
    },
    {
      name: 'Afdeen',
      time: '7:24 am',
      avatar:
        'https://cdn4.sharechat.com/bd5223f_s1w/9rpw0QQErwU5RVAmKGQ5skWDEg46eKUVQ2oX_new_compressed_thumb.jpeg?tenant=sc&referrer=pwa-sharechat-service&f=thumb.jpeg',
    },
    {
      name: 'Surash',
      time: '7:14 am',
      avatar:
        'https://cdn4.sharechat.com/33d5318_1c8/key_frames/30dbb49b_17166191710_1716619175125_keyframe_02_00.jpg?tenant=sc&referrer=pwa-sharechat-service&f=_02_00.jpg',
    },
    {
      name: 'divya',
      time: '6:30 am',
      avatar:
        'https://cdn4.sharechat.com/33d5318_1c8/xPYr5BBLPrTOx6PADjeeuEkp97o0j4c3eVkO_new_compressed_thumb.jpeg?tenant=sc&referrer=pwa-sharechat-service&f=thumb.jpeg',
    },
    {
      name: 'Alex',
      time: '12:23 am',
      avatar:
        'https://cdn4.sharechat.com/1f181438_1633183165695_sc_1633183187897_keyframe_01_01.jpg?tenant=sc&referrer=pwa-sharechat-service&f=_01_01.jpg',
    },
    {
      name: 'Sanger',
      time: 'Yesterday',
      avatar:
        'https://cdn4.sharechat.com/33d5318_1c8/key_frames/1d52fbfb_17163893271_1716389371676_keyframe_02_00.jpg?tenant=sc&referrer=pwa-sharechat-service&f=_02_00.jpg',
    },
    {
      name: 'Suresh',
      time: 'Yesterday',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdr2AevZPTXmE2CCRGelSg4W59uA91Z19OH_say2O04NbDmpQyJmE6qW7Eqskh-EuX3o0&usqp=CAU',
    },
  ];
}

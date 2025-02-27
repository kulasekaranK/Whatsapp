import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  home,
  cameraOutline,
  ellipsisVertical,
  chatbubbleEllipsesSharp,
  lockClosedOutline,
  archiveOutline,
  addSharp,
  checkmarkDoneOutline,
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import lottie from 'lottie-web';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonButton,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonSearchbar,
  IonItem,
  IonChip,
  IonList,
  IonLabel,
  IonAvatar,
  IonBadge,
  IonNote,
  IonText,
  IonFab,
  IonFabButton,
  IonPopover,
  IonIcon,
  IonInput,
} from '@ionic/angular/standalone';
import { PopoverController } from '@ionic/angular';
import { CapacitorService } from '../services/capacitor.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonIcon,
    IonPopover,
    IonFabButton,
    IonFab,
    IonText,
    IonNote,
    IonBadge,
    IonAvatar,
    IonLabel,
    IonList,
    IonChip,
    IonItem,
    IonSearchbar,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButton,
    IonHeader,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class Tab1Page implements AfterViewInit {
  @ViewChild('myPopover') myPopover!: IonPopover;
  selectedChip: string = 'All';

  constructor(private router: Router, private service: CapacitorService) {
    addIcons({
      checkmarkDoneOutline,
      cameraOutline,
      ellipsisVertical,
      addSharp,
      lockClosedOutline,
      chatbubbleEllipsesSharp,
      archiveOutline,
    });
  }
  camera() {
this.service.takePhoto();
  }

  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: document.getElementById('lottie-search')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '../../assets/animation.json',
    });

        lottie.loadAnimation({
          container: document.getElementById('meta')!,
          renderer: 'svg',
          autoplay: false,
          path: '../../assets/animation.json',
        });
  }

  selectChip(chipName: string) {
    this.selectedChip = chipName;
  }

  navigateToChat(contact: any) {
    this.router.navigate(['/chat', contact.name]);
  }

  contacts = [
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: true,
      yourMessage: true,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: true,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
      yourMessage: true,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: true,
      yourMessage: true,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: true,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: true,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
  ];
}

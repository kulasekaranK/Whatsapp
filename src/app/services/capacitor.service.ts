import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Injectable({
  providedIn: 'root',
})
export class CapacitorService {
  constructor() {}
  async takePhoto() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const imageUrl = image.webPath;
    console.log(imageUrl);
  }
}

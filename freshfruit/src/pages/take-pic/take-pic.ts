import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {Camera,CameraOptions} from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image/image';
import { IdentifyphotoPage } from '../identifyphoto/identifyphoto';
/**
 * Generated class for the TakePicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-take-pic',
  templateUrl: 'take-pic.html',
})
export class TakePicPage {
  base64img:string=''
;

  constructor(public navCtrl: NavController, public navParams: NavParams,public imgpov:ImageProvider,
    public nav: NavController,private platform: Platform,private camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakePicPage');
  }
  imageCaptured(){
    const options:CameraOptions={
    quality:70,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((ImageData=>{
    this.base64img="data:image/jpeg;base64,"+ImageData;
    }),error=>{
    console.log(error);
    })
    }
    imageCapturedGallery(){
      const options:CameraOptions={
      quality:70,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
      }
      this.camera.getPicture(options).then((ImageData=>{
      this.base64img="data:image/jpeg;base64,"+ImageData;
      }),error=>{
      console.log(error);
      })
      }
      nextPage(){
        this.imgpov.setImage(this.base64img);
        this.navCtrl.push(IdentifyphotoPage);
        }
        clear(){
        this.base64img='';
        }
        

}

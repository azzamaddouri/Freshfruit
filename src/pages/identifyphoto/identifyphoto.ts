import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/**
 * Generated class for the IdentifyphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identifyphoto',
  templateUrl: 'identifyphoto.html',
})
export class IdentifyphotoPage {
  base64img: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, 
    public imgpov: ImageProvider,private transfer: FileTransfer) {
      this.base64img = this.imgpov.getImage();
  }
  uploadPic() {
    let loader = this.loadingCtrl.create({
    content: "Uploading...."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
    fileKey: "photo",
    fileName: "test3.jpg",
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
    }
    fileTransfer.upload(this.base64img,'http://192.168.1.6:8888/img_upload/imageUpload.php', options).then(data => {
      alert(JSON.stringify(data));
      loader.dismiss();
      }, error => {
      alert("error");
      alert("error" + JSON.stringify(error));
      loader.dismiss();
      });
      }
      

  }

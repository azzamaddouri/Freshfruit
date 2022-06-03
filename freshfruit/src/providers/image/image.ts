import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {
base64img:string='';
url:'http://192.168.1.6:8888/img_upload/imageUpload.php';
constructor(public http: HttpClient) {
}
setImage(img){
this.base64img=img;
}
getImage(){
return this.base64img;
}
}

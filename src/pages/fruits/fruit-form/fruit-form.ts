import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController} from 'ionic-angular';
import { snapshotToArray } from '../../../app/app.component';
import { Fruit } from '../../../models/Fruit';
import { FruitsService } from '../../../services/fruits.service';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-fruit-form',
  templateUrl: 'fruit-form.html',
})
export class FruitFormPage  implements OnInit {
  imagesource;
  fruitPhoto;
  fruitForm: FormGroup;
  fruitsList: Fruit[];
  ref=firebase.database().ref('fruits/');
  fruits=[];
  image = '';
  inputText:string='';
  inputText1:string='';
  constructor(private formBuilder: FormBuilder,public navCtrl: NavController,private fruitsService: FruitsService,public camera: Camera) {
    this.ref.on('value',resp=>{
      this.fruits=snapshotToArray(resp);
    });
  }
  addFruit(item: any){
    if (item!==undefined && item!==null) {
      let newItem=this.ref.push();
    newItem.set(item);
    this.inputText='';
    }
  }
  async deleteFruit(key){
    firebase.database().ref('fruits/'+key).remove();
  }
  ngOnInit() {
    this.initForm();
    }
  initForm() {
    this.fruitForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: this.formBuilder.array([])
    });
    }
    getDescriptionArray() {
      return this.fruitForm.get('description') as FormArray;
      }
      onAddDescription() {
        let newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);
        }
        onRemoveDescription(index: number) {
          this.getDescriptionArray().removeAt(index);
          }
          onSubmitForm() {
            let newFruit = new Fruit(this.fruitForm.get('name').value);
            for (let control of this.getDescriptionArray().controls) {
            newFruit.description.push(control.value);
            }
            newFruit.name=this.inputText;
            newFruit.prix=this.inputText1+"DT";
            newFruit.imageUrl=this.image;
            console.log(this.image);
            this.fruitsService.addFruit(newFruit);
            this.navCtrl.pop();
            }
            async addPhoto(source: string) {
              if (source === 'camera') {
              console.log('camera');
              const cameraPhoto = await this.openCamera();
              this.image = 'data:image/jpg;base64,' + cameraPhoto;
              } else {
              console.log('library');
              const libraryImage = await this.openLibrary();
              this.image = 'data:image/jpg;base64,' + libraryImage;
              }
              }
              async openCamera() {
                const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.CAMERA
                };
                return await this.camera.getPicture(options);
                }
                async openLibrary() {
                  const options: CameraOptions = {
                  quality: 100,
                  destinationType: this.camera.DestinationType.DATA_URL,
                  encodingType: this.camera.EncodingType.JPEG,
                  mediaType: this.camera.MediaType.PICTURE,
                  targetWidth: 1000,
                  targetHeight: 1000,
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                  };
                  return await this.camera.getPicture(options);
                  }
                                                

}

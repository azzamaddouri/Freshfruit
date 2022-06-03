import { Component ,OnDestroy,OnInit,ViewChild} from '@angular/core';
import { IonicPage, LoadingController, MenuController, ModalController,NavController,Slides, ToastController} from 'ionic-angular';
import { Fruit } from '../../models/Fruit';
import { SingleFruitPage } from '../single-fruit/single-fruit';
import{ FruitsService } from '../../services/fruits.service';
import { FruitFormPage } from './fruit-form/fruit-form';
import { Subscription } from 'rxjs/Subscription';
@IonicPage()
@Component({
  selector: 'page-fruits',
  templateUrl: 'fruits.html',
})
export class FruitsPage implements OnInit,OnDestroy {
  fruitsList: Fruit[];
  fruitsList1: Fruit[];
  fruitsList11: Fruit[];
  fruitsList2: Fruit[];
  fruitsList22: Fruit[];
  fruitsListPopulaire: Fruit[];
  searchQuery: string = '';
  fruitsSubscription: Subscription;
  @ViewChild('slider') slider:Slides;
  page="0";
  base64img:string=''
;
constructor(private modalCtrl: ModalController,private menuCtrl: MenuController,
private fruitsService: FruitsService,public navCtrl: NavController,private toastCtrl: ToastController,
private loadingCtrl: LoadingController) {
}
ionViewWillEnter() {
this.fruitsList = this.fruitsService.fruitsList.slice();
this.fruitsList1 = this.fruitsService.fruitsList1.slice();
this.fruitsList11 = this.fruitsService.fruitsList11.slice();
this.fruitsList2 = this.fruitsService.fruitsList2.slice();
this.fruitsList22 = this.fruitsService.fruitsList22.slice();
this.fruitsListPopulaire = this.fruitsService.fruitsListPopulaire.slice();
}
onLoadFruit(index: number) {
let modal = this.modalCtrl.create(SingleFruitPage, {index: index});
modal.present();
}
onLoadFruit1(index: number) {
  index=index+3;
let modal = this.modalCtrl.create(SingleFruitPage, {index: index});
modal.present();
}
onLoadFruit2(index: number) {
  index=index+6;
let modal = this.modalCtrl.create(SingleFruitPage, {index: index});
modal.present();
}
onToggleMenu() {
this.menuCtrl.open();
}
segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}
SelectedTab(ind){
  this.slider.slideTo(ind);

}
moveButton($event){
  this.page=$event._snapIndex.toString();
}
onNewFruit() {
  this.navCtrl.push(FruitFormPage);
  
  }
  getItems(ev: any) {
 
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.fruitsList = this.fruitsList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  index: number;
  hide(ind:number) {
    this.fruitsList.forEach(fruit=>{
      this.index =this.fruitsList.indexOf(fruit);
      if (this.index==ind) {
        
        this.fruitsList.splice(this.index,1);
      }
    });
  }
  hide1(ind:number) {
    this.fruitsList1.forEach(fruit=>{
      this.index =this.fruitsList1.indexOf(fruit);
      if (this.index==ind) {
        this.fruitsList1.splice(this.index,1);
      }
    });
  }
  hide2(ind:number) {
    this.fruitsList2.forEach(fruit=>{
      this.index =this.fruitsList2.indexOf(fruit);
      if (this.index==ind) {
        this.fruitsList2.splice(this.index,1);
      }
    });
  }
  ngOnInit() {
    this.fruitsSubscription = this.fruitsService.fruits$.subscribe(
    (appareils: Fruit[]) => {
    this.fruitsList = appareils.slice();
    }
    );
    this.fruitsService.emitAppareils();
    }
    ngOnDestroy() {
      this.fruitsSubscription.unsubscribe();
      }

      onSaveList() {
        let loader = this.loadingCtrl.create({
        content: 'Sauvegarde en cours…'
        });
        loader.present();
        this.fruitsService.saveData().then(
        () => {
        loader.dismiss();
        this.toastCtrl.create({
        message: 'Données sauvegardées !',
        duration: 3000,
        position: 'bottom'
        }).present();
        },
        (error) => {
        loader.dismiss();
        this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'bottom'
        }).present();
        }
        );
        }
        onFetchList() {
          let loader = this.loadingCtrl.create({
          content: 'Récuperation en cours…'
          });
          loader.present();
          this.fruitsService.retrieveData().then(
          () => {
          loader.dismiss();
          this.toastCtrl.create({
          message: 'Données récupérées !',
          duration: 3000,
          position: 'bottom'
          }).present();
          },
          (error) => {
          loader.dismiss();
          this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
          }).present();
          }
          );
          }
}


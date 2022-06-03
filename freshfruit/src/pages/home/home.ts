import { Component } from '@angular/core';
import { FruitsPage } from '../fruits/fruits';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fruitsPage = FruitsPage;
}

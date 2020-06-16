import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  slideOpts = {
    allowSlidePrev: false, // Izquierda
    allowSlideNext: false // Derecha
  }

  constructor(public dataLocalService: DataLocalService) {
    this.dataLocalService.cargarFavoritos();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() i: number;

  constructor(private iab: InAppBrowser, private actionSheetCtlr: ActionSheetController) { }

  ngOnInit() {}

  abrirNoticia(){
    console.log('Noticia:', this.noticia.url);
    const browser = this.iab.create(this.noticia.url, '_system'); // Lo abre en el navegador nativo del sistema
  }

  lanzarMenu(){
    this.presentActionSheet();
  }

  // Declaramos el Action Sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtlr.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share-social-outline',
          handler: () => {
            console.log('Compartir');
          }
        },
        {
          text: 'Favorito',
          icon: 'heart',
          handler: () => {
            console.log('Favoritos');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
      }]
    });
    await actionSheet.present();
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article[] = [];

  constructor(private storage: Storage, private toastController: ToastController) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  // Proceso para guardar noticias
  guardarNoticias(noticia: Article){

    const existe = this.noticias.find(notice => notice.title === noticia.title); // Validamos que ya exista la noticiq en favoritos
    if (!existe){
      this.noticias.unshift(noticia); // Lo pone al principio del arreglo
      this.storage.set('favoritos', this.noticias);
      this.presentToast('Agregado a favoritos');
    } else {
      this.presentToast('Ya existe en favoritos');
    }
  }

  // Proceso para cargar noticias o favoritos
  async cargarFavoritos(){
     const favoritos = await this.storage.get('favoritos');
    //  console.log(favoritos);
    // tslint:disable-next-line: align
    if (favoritos) {
      this.noticias = favoritos;
    }
  }

  borrarNoticia(noticia: Article){
    this.noticias = this.noticias.filter(notices => notices.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
    this.presentToast('Borrado de favoritos');
  }
}

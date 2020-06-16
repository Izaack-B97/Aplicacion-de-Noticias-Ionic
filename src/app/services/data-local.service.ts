import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article[] = [];

  constructor(private storage: Storage) { }

  // Proceso para guardar noticias
  guardarNoticias(noticia: Article){

    const existe = this.noticias.find(notice => notice.title === noticia.title); // Validamos que ya exista la noticiq en favoritos
    if (!existe){
      this.noticias.unshift(noticia); // Lo pone al principio del arreglo
      this.storage.set('favoritos', this.noticias);
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
}

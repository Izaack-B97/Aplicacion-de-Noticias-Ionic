import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  @ViewChild(IonSegment, {static: false}) segment: IonSegment;
  noticias: Article[] = [];

  constructor(private noticiaService: NoticiasService) {}

  // TODO::RECUERDA QUE ESTE ES PARA LOS PENDIENTES,
  // FIXME: ESTE ES PARA OTRA COSA


  ngOnInit(){
  }

  ionViewDidEnter(){
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  cambioCategoria(event){
    const categoria = event.detail.value;
    // console.log(categoria);
    this.noticias = [];
    this.cargarNoticias(categoria);
  }

  cargarNoticias(categoria: string){
    this.noticiaService.getTopHeadLinesCategorias(categoria)
      .subscribe(resp => {
        console.log(resp);
        this.noticias.push(...resp.articles);
      });
  }
}

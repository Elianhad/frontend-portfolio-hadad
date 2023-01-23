import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css', '../../../bootstrap.min.css']
})
export class ButtonsComponent implements OnInit {
  urlName:string | null = null
  @Input() item:any
  @Output() edicion: EventEmitter<any> = new EventEmitter()
  @Output() eliminar: EventEmitter<any> = new EventEmitter()

  constructor(private rutaActiva:ActivatedRoute){}
 
  ngOnInit():void {
    
    const url = this.rutaActiva.url
    url.subscribe((value:UrlSegment[]) => {
      if(value[0] !== undefined){
        this.urlName= value[0].path
      }
      })  
  }
  deleteItem(id:any):void{
    this.eliminar.emit(id)
    // envio id a componente padre para realizar logica de eliminación
  }
  editarItem(item:any):void{
    // esto va a componente padre (education, skills) para realizar la logica de setValue del formulario
    const enviarEvento = {
      item: item,
      url: this.urlName
    }
    this.edicion.emit(enviarEvento)
  }

}


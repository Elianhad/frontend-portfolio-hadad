import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-buttonplus',
  templateUrl: './buttonplus.component.html',
  styleUrls: ['./buttonplus.component.css']
})
export class ButtonplusComponent implements OnInit {
  @Output()  stateFormIsActive:EventEmitter<boolean>= new EventEmitter()

  urlName:string | null = null

  constructor(private rutaActiva:ActivatedRoute){}
  ngOnInit():void {
    const url = this.rutaActiva.url
    url.subscribe((value:UrlSegment[]) => {
      if(value[0] !== undefined){
        this.urlName= value[0].path
      }
      })
    }
  
  makeFormVisible(){
    this.stateFormIsActive.emit(true)
  }
  
}

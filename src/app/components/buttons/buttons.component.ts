import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css', '../../../bootstrap.min.css']
})
export class ButtonsComponent {
  constructor(private rutaActiva:ActivatedRoute){}
  urlName:string | null = null
  ngOnInit():void {
    const url = this.rutaActiva.url
    url.subscribe((value:UrlSegment[]) => {
      this.urlName= value[0].path
      })
    }
}


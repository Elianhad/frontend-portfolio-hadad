import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css', '../../../bootstrap.min.css']
})
export class ButtonsComponent implements OnInit {
  constructor(private rutaActiva:ActivatedRoute){}
  urlName:string | null = null
  ngOnInit():void {
    const url = this.rutaActiva.url
    url.subscribe((value:UrlSegment[]) => {
      this.urlName= value[0].path
      })
    }
}


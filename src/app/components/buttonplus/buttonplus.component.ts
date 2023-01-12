import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-buttonplus',
  templateUrl: './buttonplus.component.html',
  styleUrls: ['./buttonplus.component.css']
})
export class ButtonplusComponent implements OnInit {
  constructor(private rutaActiva:ActivatedRoute){}
  urlName:string | null = null
  ngOnInit():void {
    const url = this.rutaActiva.url
    url.subscribe((value:UrlSegment[]) => {
      this.urlName= value[0].path
      })
    }

}

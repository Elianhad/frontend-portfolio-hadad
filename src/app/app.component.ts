import { Component, OnInit} from '@angular/core';
import { EstadosUIService } from './service/estados-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio Elian Hadad';
  isToast: boolean = false
  msg!:string 
  constructor(private uiState:EstadosUIService){}

  ngOnInit(): void {
    this.uiState.toast$.subscribe( (res:any) => {
      this.msg = res
      this.isToast = true
      setTimeout(() => {
        this.isToast = false
      }, 3000 )
      })
  }

}

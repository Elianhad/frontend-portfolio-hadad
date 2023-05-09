import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/interface/IExperience';

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.css']
})
export class FormExperienceComponent {
  @Input()
  isFormActive: boolean = false;
  @Input()
  experienceToEdit!: IExperience;
  titulo!: string;
  descripcion!: string;
  fecha!: Date;

  onClickClose() {
    this.isFormActive = false;
  }
  submitForm() {
    const newExperience: IExperience = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.fecha,
    }
    // enviar a service
    
    //if (this.experienceToEdit) {
    // this.experienceService.putExperience(newExperience)  
    //}
    // this.experienceService.postExperience(newExperience)

  }
}

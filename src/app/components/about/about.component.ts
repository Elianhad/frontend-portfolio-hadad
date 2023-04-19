import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() isInDashboard: boolean = false;
  isFormActive: boolean = false;
  about: FormControl = new FormControl(
    '',
    Validators.compose([Validators.required, Validators.minLength(50)])
  );
  constructor() {}
  toggleForm(value: boolean) {
    this.isFormActive = value;
  }
  submitAbout() {
    if (this.about.invalid) return;
    console.log(this.about.value);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
})
export class FormBlockComponent {

  form: FormGroup = new FormGroup({
    titleControl: new FormControl('', Validators.required),
    descriptionControl: new FormControl('', Validators.required),
    tagControl: new FormControl('', Validators.required),
  });

  @Output()
  newsEmitter = new EventEmitter<Event>();

  public onSubmit(): void {
    if (this.form?.invalid) {
      this.setError('titleControl');
      this.setError('descriptionControl');
      this.setError('tagControl');
      return;
    } else {
      this.newsEmitter.emit(this.form?.value);
    }
  }

  private setError(control: string): void {
    if (!this.form.controls[control].value) {
      this.form.controls[control].setErrors({required: true});
      this.form.controls[control].markAsTouched();
    }
  }
}

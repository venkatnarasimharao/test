import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.styl']
})
export class FileUploadingComponent implements OnInit {
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      formArray: this.formBuilder.array([this.formArray()]),
    });
  }
  formArray() {
    return this.formBuilder.group({
      file: []
    });
  }
  removeformArray(i: number) {
    const control = this.uploadForm.controls['formArray'] as FormArray;
    control.removeAt(i);
  }

  addformArray() {
    const control = this.uploadForm.controls['formArray'] as FormArray;
    control.push(this.formArray());
  }
}

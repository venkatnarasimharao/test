import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.styl']
})
export class FileUploadingComponent implements OnInit {
  uploadForm: FormGroup;
  uploadType: any;
  imageName: any;
  finalObject: { file: FileReader; filename: any; };
  imageSrc: any;
  intermediateDetails: any;
  intermediateArr: any = [];

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
    //delete file if user won't want to upload the file
    if (this.intermediateArr.length > 0) {
      this.intermediateArr.splice(1, i)
    }
  }

  addformArray() {
    const control = this.uploadForm.controls['formArray'] as FormArray;
    control.push(this.formArray());
  }
  selectFile(event: any, type: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log('file read here', file);
      this.uploadType = type;

      let extType = '';
      switch (type) {
        case 'formArray':
          extType = 'pdf|png|PDF|PNG|txt';
          this.imageName = file.name;
          break;
        default:
          // others
          this.imageName = file.name;
          extType = 'pdf|png|jpg|jpeg|PDF|PNG|JPG|JPEG|txt';
          break;
      }
      const lastIndex = file.name.lastIndexOf('.');
      const reader = new FileReader();
      if (!extType.includes(file.name.substr(lastIndex + 1, file.name.length))) {
        // this.toaster.warningToastr('invalid format');
        return;
      }
      reader.onload = this._selectFile.bind(this);
      reader.readAsDataURL(file);
      this.finalObject = {
        file: reader,
        filename: file.name
      };
    }
  }
  _selectFile(e: any) {
    const reader = e.target;
    this.imageSrc = reader.result;

    switch (this.uploadType) {
      case 'formArray':
        this.intermediateDetails = this.imageSrc;
        this.intermediateArr.push(this.intermediateDetails);
        break;
      default:
        console.log('in others');
        break;
    }
  }
  fileUpload() {
    const myFormArr = this.uploadForm.value;
    const finalFormArr = myFormArr.formArray;
    console.log(finalFormArr, "form array")
    for (let i = 0; i < finalFormArr.length; i++) {
      const finalDocArray = {
        document_name: finalFormArr[i].file.substring(finalFormArr[i].file.indexOf('h') + 2, finalFormArr[i].file.length),
        documentPath: this.intermediateArr[i]
      };
      console.log(finalDocArray, 'sssssssss');
      // this.trainingManagementService.submitTriDocuments(finalDocArray).subscribe((data: any) => {
      //   data = this._encDec.decrypt(data.edc);
      //   if (data.success) {
      //     this.toaster.successToastr('Upload content successfully');
      //     $('#uploaddoc').modal('hide');
      //   } else {
      //     this.toaster.errorToastr('Something went wrong');
      //   }
      // });
    }
  }
}

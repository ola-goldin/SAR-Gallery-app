import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models';

export interface Data {
    post: Post;
    title: string
}

@Component({
    selector: 'FormDialog',
    templateUrl: 'form.component.html',
})
export class FormDialog {

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<FormDialog>,
        @Inject(MAT_DIALOG_DATA) public data: Data) { }

    form = this.fb.group({
        title: [this.data.post.title, Validators.required],
        text: [this.data.post.body, [Validators.required]],
    });

    onNoClick(): void {
        this.dialogRef.close();
    }


}
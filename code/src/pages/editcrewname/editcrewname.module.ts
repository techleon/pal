import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditcrewnamePage } from './editcrewname';

@NgModule({
  declarations: [
    EditcrewnamePage,
  ],
  imports: [
    IonicPageModule.forChild(EditcrewnamePage),
  ],
  exports: [
    EditcrewnamePage
  ]
})
export class EditcrewnamePageModule {}

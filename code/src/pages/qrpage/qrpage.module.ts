import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrpagePage } from './qrpage';
import { SafeUrlPipe } from '../../app/pipes/safe-url.pipe';

@NgModule({
  declarations: [
    QrpagePage,
    SafeUrlPipe
  ],
  imports: [
    IonicPageModule.forChild(QrpagePage),
  ],
  exports: [
    QrpagePage
  ]
})
export class QrpagePageModule {}

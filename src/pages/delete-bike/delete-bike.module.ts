import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteBikePage } from './delete-bike';

@NgModule({
  declarations: [
    DeleteBikePage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteBikePage),
  ],
})
export class DeleteBikePageModule {}

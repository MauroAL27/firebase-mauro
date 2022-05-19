import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailStudioPageRoutingModule } from './detail-studio-routing.module';

import { DetailStudioPage } from './detail-studio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailStudioPageRoutingModule
  ],
  declarations: [DetailStudioPage]
})
export class DetailStudioPageModule {}

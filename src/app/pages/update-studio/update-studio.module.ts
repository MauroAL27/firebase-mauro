import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStudioPageRoutingModule } from './update-studio-routing.module';

import { UpdateStudioPage } from './update-studio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStudioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateStudioPage]
})
export class UpdateStudioPageModule {}

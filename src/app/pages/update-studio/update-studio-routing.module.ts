import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateStudioPage } from './update-studio.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateStudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateStudioPageRoutingModule {}

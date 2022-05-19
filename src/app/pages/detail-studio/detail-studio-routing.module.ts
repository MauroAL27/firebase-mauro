import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailStudioPage } from './detail-studio.page';

const routes: Routes = [
  {
    path: '',
    component: DetailStudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailStudioPageRoutingModule {}

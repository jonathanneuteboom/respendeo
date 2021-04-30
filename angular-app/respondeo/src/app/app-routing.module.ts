import { RouterModule, Routes } from '@angular/router';

import { HoofdmenuComponent } from './hoofdmenu/hoofdmenu.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VragenComponent } from './vragen/vragen.component';

const routes: Routes = [
  { path: 'hoofdmenu', component: HoofdmenuComponent },
  { path: '', redirectTo: '/hoofdmenu', pathMatch: 'full' },
  { path: 'vragen', component: VragenComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

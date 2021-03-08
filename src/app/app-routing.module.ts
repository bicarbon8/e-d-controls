import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EDControlsComponent } from './e-d-controls/e-d-controls.component';

const routes: Routes = [
  {path: '', component: EDControlsComponent},
  {path: 'e-d-controls', component: EDControlsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

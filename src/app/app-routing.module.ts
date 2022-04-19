import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';




const routes: Routes = [

  {
   path: 'body',
   component: BodyComponent,
 },
{
  path: 'search',
   component: SearchComponent,
 },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

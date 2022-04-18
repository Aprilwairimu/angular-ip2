import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: '' ,component: BodyComponent },
  { path: 'search', component: FormComponent },
  // { path: '**', component: BodyComponent },

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

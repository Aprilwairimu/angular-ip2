import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: 'Home' ,component: BodyComponent },
  { path: 'About', component: BodyComponent },
  { path: 'search', component: SearchComponent },
  // { path: '**', component: NotFoundComponent },

  { path: '', redirectTo: "/goals", pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

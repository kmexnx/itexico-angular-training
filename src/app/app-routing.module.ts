import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemDetailsComponent } from './poem-details/poem-details.component';
import { BodyComponent } from './body/body.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'main', component: BodyComponent},
  {path: 'poem/:poem', component: PoemDetailsComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

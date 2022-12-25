import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroDetailsComponent } from './componentes/hero-details/hero-details.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroes/:id', component: HeroDetailsComponent},
    {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

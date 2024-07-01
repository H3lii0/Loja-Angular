import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './componentes/new/new.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'novo-produto', component: NewComponent },
  { path: 'produto', loadChildren: () => import('./features/produto/produto.module').then(m => m.ProdutoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

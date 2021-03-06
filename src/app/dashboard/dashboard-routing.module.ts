import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [RouterModule.forChild(DashboardRoutingModule.routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { 
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}

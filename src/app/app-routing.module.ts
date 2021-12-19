import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './user/guards/is-auth.guard';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module')
        .then((module) => module.DashboardModule),
      canLoad: [IsAuthGuard]
    },
    {
      path: 'account',
      loadChildren: () => import('./user/user.module')
        .then((module) => module.UserModule)
    },
    {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }
  ]
}

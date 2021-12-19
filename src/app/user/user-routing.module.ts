import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasUserGuard } from './guards/has-user.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [RouterModule.forChild(UserRoutingModule.routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'signin',
      pathMatch: 'full'
    },
    {
      path: 'signin',
      component: SigninComponent,
      canActivate: [HasUserGuard]
    },
    {
      path: 'signup',
      component: SignupComponent,
      canActivate: [HasUserGuard]
    },
    {
      path: '**',
      redirectTo: 'signin',
      pathMatch: 'full'
    }
  ];
}

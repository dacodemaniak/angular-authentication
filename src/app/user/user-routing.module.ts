import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      component: SigninComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: '**',
      redirectTo: 'signin',
      pathMatch: 'full'
    }
  ];
}

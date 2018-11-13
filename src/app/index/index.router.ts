import { Route } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from '../authguard/auth.guard';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
export const IndexRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: '', component: LandingComponent },
            { path: 'login', component: LoginComponent },            
            { path: 'signup', component: SignupComponent },
            { path: 'forgot', component: ForgotComponent },
            { path: 'details/:productid', component: DetailsComponent },
        ]
    }
]


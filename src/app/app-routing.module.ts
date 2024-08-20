import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { UserformComponent } from "./shared/components/users/userform/userform.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { ProductformComponent } from "./shared/components/products/productform/productform.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { FairsComponent } from "./shared/components/fairs/fairs.component";
import { FairdetailsComponent } from "./shared/components/fairs/fairdetails/fairdetails.component";
import { PagenotfoundComponent } from "./shared/components/pagenotfound/pagenotfound.component";
import { UsersresolverService } from "./shared/services/usersresolver.service";
import { ProductresolverService } from "./shared/services/productresolver.service";
import { FairsresolverService } from "./shared/services/fairsresolver.service";
import { AuthComponent } from "./shared/components/auth/auth.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { UserRoleGuard } from "./shared/services/user-role.guard";

const routes : Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGaurd, UserRoleGuard],
        data: {
            userRole : ['buyer', 'admin', 'sa']
        },
        title: 'Home'
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGaurd, UserRoleGuard],
        resolve: {usersData : UsersresolverService},
        data: {
            userRole : ['admin', 'sa']
        },
        title: 'Users',
        children: [
            {
                path: 'addUser',
                component: UserformComponent
            },
            {
                path: ':userId',
                component: UserComponent
            },
            {
                path: ':userId/editUser',
                component: UserformComponent
            }
        ]
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGaurd, UserRoleGuard],
        resolve: {productsData : ProductresolverService},
        data:{
            userRole : ['buyer', 'admin', 'sa']
        },
        title: 'Products',
        children: [
            {
                path: 'addProduct',
                component: ProductformComponent
            },
            {
                path: ':productId',
                component: ProductComponent
            },
            {
                path: ':productId/editProduct',
                component: ProductformComponent
            }
        ]
    },
    {
        path: 'fairs',
        component: FairsComponent,
        canActivate: [AuthGaurd, UserRoleGuard],
        resolve: {fairsData : FairsresolverService},
        data:{
            userRole : ['sa']
        },
        title: 'Fairs',
        children: [
            {
                path: ':fairId',
                component: FairdetailsComponent
            }
        ]
    },
    {
        path: 'page-not-found',
        component: PagenotfoundComponent
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
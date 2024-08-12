import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from "./auth-guard.service";

const routes: Route[] = [
    {
        path: "", 
        redirectTo: "/dashboard", 
        pathMatch: 'full'
    }, //abs path
    {
        path: "dashboard", 
        component:HomeComponent
    },
    {
        path: "user", 
        component:UsersComponent, 
        children: [
        {path: ":id/:name", component:UserComponent},
    ]},
    {
        path: "servers", 
        component:ServersComponent,
        canActivate: [AuthGuard],
        children:[
            {path: ":id", component:ServerComponent},
            {path: ":id/edit", component:EditServerComponent},
        ]
    },
    {
        path:'**',          //wild card should be last in list
        component: NotFoundComponent
    } 
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
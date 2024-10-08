import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Route, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.guard.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolver } from './servers/server/server.resolver.service';


@NgModule({
  declarations: [
    ErrorComponent,
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent,
  ],
  imports: [
    // RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [ServerResolver,ServersService, AuthGuard, CanDeactivateGuard], //auth service follows alt path
  bootstrap: [AppComponent]
})
export class AppModule { }

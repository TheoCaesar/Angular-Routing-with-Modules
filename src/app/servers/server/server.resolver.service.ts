import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface server {
    id:number, 
    name:string, 
    status:string
}

@Injectable() //allow other services be injected in here
export class ServerResolver implements Resolve<server>{
    serversService = inject(ServersService)
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
           server | Observable<server> | Promise<server> {
        return this.serversService.getServer(+route.params.id)
    }
}
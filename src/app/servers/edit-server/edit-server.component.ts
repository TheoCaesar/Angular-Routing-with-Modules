import { Component, OnInit, inject } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate.guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  serverID : number;
  changesSaved = false;
  router = inject(Router)

  constructor(private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams)=>
      this.allowEdit = queryParams.allowEdit == '1' ? true : false);
    this.route.params.subscribe((params:Params)=> this.serverID = +params.id);
      this.server = this.serversService.getServer(this.serverID);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivate() {
    if (!this.allowEdit) return true;
    if ((this.serverName != this.server.name || this.serverStatus != this.server.status) 
      && !this.changesSaved){
      return confirm('Do you want to discard changes?')
    } else {
      return true;
    }
  }

}

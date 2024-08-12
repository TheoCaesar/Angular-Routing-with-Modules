import { Component, inject, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverId: number;
  actRoute = inject(ActivatedRoute)

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    const subscr = this.actRoute.params.subscribe((response: Params)=> {
      this.serverId = +response.id //precede with + to convert to int
      this.server = this.serversService.getServer(this.serverId);
    });  
  }

}

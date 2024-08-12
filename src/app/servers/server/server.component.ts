import { Component, inject, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params ,Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverId: number;
  actRoute = inject(ActivatedRoute)
  router = inject(Router);

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    const subscr = this.actRoute.params.subscribe((response: Params)=> {
      this.serverId = +response.id //precede with + to convert to int
      this.server = this.serversService.getServer(this.serverId);
    });  
  }

  onEdit(){
    // this.router.navigate(['/servers', this.serverId, 'edit']) //set up route (url) manually
    this.router.navigate(['edit'], {
      relativeTo: this.actRoute,
      queryParamsHandling: 'preserve'
    }) //set up relative route
  }
}

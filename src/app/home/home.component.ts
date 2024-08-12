import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  router = inject(Router);
  authService = inject(AuthService)
  
  auth(param:string){
    (+param === 1 ) ? this.authService.login() : this.authService.logout()
  }  
  
  checkPayload(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: {allowEdit: id},
      fragment: 'loading'
    })
  }

  ngOnInit() {
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  router = inject(Router);
  checkPayload(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: {allowEdit: id},
      fragment: 'loading'
    })
  }

  ngOnInit() {
  }

}

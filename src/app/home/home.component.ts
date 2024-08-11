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
  checkPayload() {
    //perform some calcs
    setTimeout(() => {
      window.alert("redirecting to servers; Click OK")
      // this.router.navigate(['servers']) //relative path
      this.router.navigate(['/servers']) //absolute path
    }, 3000);
  }

  ngOnInit() {
  }

}

import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit{
  route = inject(ActivatedRoute);
  errMsg : string;
  ngOnInit(): void {
    this.route.data.subscribe((response)=> 
      this.errMsg = response.errorMessage)
  }
}

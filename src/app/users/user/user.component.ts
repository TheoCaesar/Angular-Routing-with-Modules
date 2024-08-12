import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  destroyRef = inject(DestroyRef)

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot)
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
    //subscribe to possible change of params
    const subscr = this.route.params.subscribe((response:Params)=>{
      this.user = {
        id: response.id,
        name: response["name"]
      }
    })

    this.destroyRef.onDestroy(()=>subscr.unsubscribe())
  }
}

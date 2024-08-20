import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../module/users.interface';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData !: Array<Iusers>;

  constructor(
    private _usersService : UsersService,
    private _router : Router,
    private _routes : ActivatedRoute
  ) { 
    this._routes.data
      .subscribe(metaData =>{
        this.usersData = metaData['usersData'];
        this._router.navigate(['users', this.usersData[0].userId],{
          queryParams: {userRole : this.usersData[0].userRole},
          queryParamsHandling : 'merge'
        })
      })
  }

  ngOnInit(): void {

  }

}

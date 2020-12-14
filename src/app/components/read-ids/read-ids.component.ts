import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SaveUserService} from '../../services/save-user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-read-ids',
  templateUrl: './read-ids.component.html',
  styleUrls: ['./read-ids.component.css']
})
export class ReadIdsComponent implements OnInit {

  submitted = false;
  loading=false; 
  user:User;

  constructor(
    private saveUserService:SaveUserService,
    private router:Router
  ) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.loading=true;

    this.saveUserService.createUser(this.user)
    .subscribe(data=>{
      this.router.navigate(['/home']);
    },
    error=>{
      this.loading = false;
    }
      );
  }

}

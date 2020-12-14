import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SaveUserService} from '../../services/save-user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-read-ids-v2',
  templateUrl: './read-ids-v2.component.html',
  styleUrls: ['./read-ids-v2.component.css']
})
export class ReadIdsV2Component implements OnInit {

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
import { Component, OnInit } from '@angular/core';
import { userModel } from '../user.model';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{
  user:userModel={}

  constructor(private api:UserApiService, private router:Router){}
  addUser(){
    console.log(this.user);
    this.api.addUserAPI(this.user).subscribe({
      next:(res:userModel)=>{
        console.log(res);
       alert('New User Added Succesfully!!!');
        this.router.navigateByUrl('/users')
      },
      error:(err:any)=>{
        alert(err.message)
      }
    })
  }
  cancel(){
    this.user={}
  }
}

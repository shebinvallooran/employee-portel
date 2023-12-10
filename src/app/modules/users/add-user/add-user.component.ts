import { Component } from '@angular/core';
import { userModel } from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:userModel={}
  addUser(){
    
  }
  cancel(){
    this.user={}
  }
}

import { Component } from '@angular/core';
import { User } from '../shared/classes/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
users:User[]=[];
user: User={} as User;
constructor(
  private userService:UserService
  ){
    this.getUsers();
  }
  addUser(){
    this.userService.addUser(this.user).subscribe(()=>{
      this.getUsers();
    })
  }
  getUsers()
  {
    this.userService.getUsers().subscribe((data=>{
      this.users=data;
      console.log(this.users);

    }))
  }
  deleteOneUser(user:User){
    if(confirm("vous voulez supprimer "+user.nom+" "+user.prenom)){
      this.userService.deleteUser(user.id).subscribe(()=>{
        this.getUsers();
      })
    }
  }
}

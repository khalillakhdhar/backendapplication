import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl="https://662e208ca7dda1fa378c2077.mockapi.io/user"
  constructor(  private http: HttpClient,
  ) { }
//get all users
getUsers(){
  return this.http.get<User[]>(this.userUrl);
}
// ajouter un user
addUser(user:User){
  return this.http.post<User>(this.userUrl,user);
}
// supprimer un user
deleteUser(id:number){
  return this.http.delete(`${this.userUrl}/${id}`);
}

}

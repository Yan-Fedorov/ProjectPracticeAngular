import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../UserField/User';
import {Guid} from 'guid-typescript';
import {LocalStorageService} from '../local-storage.service';
import {map} from 'rxjs/operators';
import {SignOut} from '../SignOut';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public firstName: string;
  public secondName: string;
  public confirmPassword: string;
  public email: string;
  public Info: string;
  public editingUser;
  public OldPassword;
  public NewPassword;

  constructor(private userService: UserService, private  localStorage: LocalStorageService, public signOut: SignOut) {

  }

  ngOnInit() {
    const id = this.localStorage.getId();
    this.userService.getItem(id).subscribe(x => {
      this.editingUser = x;


      if (this.editingUser != null) {
        this.userService.getUserInfo(this.editingUser, this);
      }
    });
  }

  editUserInfo(): void {
    if (this.OldPassword === this.editingUser.password) {
      if (this.confirmPassword === this.NewPassword) {
        this.editingUser.name = this.firstName + this.secondName;
        this.editingUser.email = this.email;
        this.editingUser.password = this.NewPassword;
        this.userService.updateItem(this.editingUser.id, this.editingUser).subscribe(x => {
          console.log(x);
        });
      }
    }
    /*
     id : data['id'],
      name: data['name'],
      info: data['info'],
      Notifications: data['Notifications'],
      email: data['email'],
      CompletedTasks: data['CompletedTasks'],
      Password: data['Password']
    });*/
    /*
        this.userService.GetElements().subscribe(x => {
          const userData = x;
        });
    */
    /*
        this.userService.getItem(Guid.parse(`32301b75-a59e-4de5-b9e8-e142da9e893b`)).subscribe(x => {
          const user = x;
          this.editingUser = x;


        });
    */

    /* this.userService.getItem(Guid.parse(`32301b75-a59e-4de5-b9e8-e142da9e893b`)).toPromise()
       .then(x => {
         const user = x;
         return this.editingUser = x;
       })
       .then(x => this.userService.updateItem(this.editingUser.id, this.editingUser).toPromise())
       .then(x => {
         console.log(x);
       });
       */
  }


//    this.userService.updateItem(this.editingUser.id, this.editingUser).subscribe();


  deleteUserInfo(): void {
    this.userService.deleteItem(Guid.parse('32301b75-a59e-4de5-b9e8-e142da9e893b')).subscribe();
  }
}

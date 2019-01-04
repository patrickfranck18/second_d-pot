import { User } from "../models/uer.models";
import { Subject } from "rxjs";

export class UserService {
    private Users: User[]= [
        {
            firstName: 'Patrick',
            lastName: 'Franck',
            email: 'franckpatrick18@gmail.com',
            moviePreference: 'Titanic',
            hobbies: [
                'courir',
                'manger'
            ]
        }
    ];
    userSubject = new Subject<User[]>();
    UsersSubject: any;

    emitUsers() {
        this.UsersSubject.next(this.Users.slice());
    }
    addUser(user: User) {
        this.Users.push(user);
        this.emitUsers();
    }
}
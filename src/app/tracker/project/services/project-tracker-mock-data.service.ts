import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockUsers } from 'src/assets/data/mock-data';

@Injectable({ providedIn: 'root' })
export class MockProjectTrackerDataService {
    constructor(private httpClient: HttpClient) { }
    public users = mockUsers;

    public getAllUsers() {
        return this.users;
    }

    public findUser(userName: string, password: string) {
        return this.users.find(x =>
            (x.username.toLowerCase() === userName.toLowerCase() || x.email.toLowerCase() === userName.toLowerCase())
            && x.password.toLowerCase() === password.toLowerCase());
    }
}

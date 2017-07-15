import { Injectable } from '@angular/core';

import { HttpClientService } from './http-client.service';
import { UserDataStoreService } from './user-data-store.service'; 

@Injectable()
export class UserService {

    usersURL: string = 'users';

  	constructor(private httpClientService: HttpClientService, private userDataStoreService: UserDataStoreService) {}

    signUp(user: any): Promise<any> {
        return this.httpClientService.post(this.usersURL, user)
            .then((response) => {                
                let response_json = response.json();
                if(response_json.user)
                    this.userDataStoreService.userInfo = response_json.user;
                else if(response_json.name)
                    this.userDataStoreService.userInfo = response_json;
                return response_json;
            });
    }

    login(loginUserInfo: any): Promise<any> {
        return this.httpClientService.post(`${this.usersURL}/login`, loginUserInfo)
            .then(response => {
                let response_json = response.json();
                if(response_json.user)
                    this.userDataStoreService.userInfo = response_json.user;
                return response_json;
            });
    }

    getQRImage(): Promise<any> {
        return this.httpClientService.get(`${this.usersURL}/qr_image.svg`)
            .then(response => response.text() as any);   
    }

    getProfileImage(): Promise<any> {
        return this.httpClientService.get(`${this.usersURL}/profile_image`)
            .then(response => response.text() as any);   
    }

    getCoverImage(): Promise<any> {
        return this.httpClientService.get(`${this.usersURL}/cover_image`)
            .then(response => response.text() as any);   
    }

    getProfileImageAny(user_id: any): Promise<any> {
        return this.httpClientService.get(`${this.usersURL}/profile_image_any`, { user_id: user_id })
            .then(response => response.text() as any);   
    }

    getCoverImageAny(user_id: any): Promise<any> {
        return this.httpClientService.get(`${this.usersURL}/cover_image_any`, { user_id: user_id })
            .then(response => response.text() as any);   
    }

    getUserInfo(user_id: any): Promise<any> {
        return this.httpClientService.get(`${this.usersURL}/get_info`, { user_id: user_id })
            .then(response => response.json() as any);      
    }

    updateName(name: string): Promise<any> {
        return this.httpClientService.post(`${this.usersURL}/update_name`, { name: name })
            .then(response => response.json() as any);      
    }

    updateMood(mood: string): Promise<any> {
        return this.httpClientService.post(`${this.usersURL}/update_mood`, { mood: mood })
            .then(response => response.json() as any);      
    }

}
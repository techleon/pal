import { Injectable } from '@angular/core';

import { HttpClientService } from './http-client.service';
import { UserDataStoreService } from './user-data-store.service'; 

@Injectable()
export class HangoutService {

    hangoutsURL: string = 'hangouts';

  	constructor(private httpClientService: HttpClientService, private userDataStoreService: UserDataStoreService) {}

    createHangout(hangout: any): Promise<any> {
        return this.httpClientService.post(`${this.hangoutsURL}`, { hangout: hangout })
            .then(response => response.json() as any);
    }

    getHangoutMembers(): Promise<any> {
        return this.httpClientService.get(`${this.hangoutsURL}/get_members`)
            .then(response => response.json() as any);
    }

}
import { Injectable } from '@angular/core';
import { UserDataStoreService } from './user-data-store.service'
import { HttpClientService } from './http-client.service';
@Injectable()
export class CrewService {

    crewsURL: string = 'crews';

  	constructor(private httpClientService: HttpClientService, private userDataStoreService: UserDataStoreService) {}

    createCrew(name: string): Promise<any> {
        return this.httpClientService.post(`${this.crewsURL}`, { name: name })
            .then(response => response.json() as any);      
    }

    getMyCrews(): Promise<any> {
        return this.httpClientService.get(`${this.crewsURL}`)
            .then(response => response.json() as any);   
    }

    getCrewMembers(crew_id: any): Promise<any> {
        return this.httpClientService.get(`${this.crewsURL}/crew_members`, { crew_id: crew_id })
            .then(response => response.json() as any);
    }

    getQRImage(): Promise<any> {
        return this.httpClientService.get(`${this.crewsURL}/qr_image.svg`)
            .then(response => response.text() as any);   
    }

    getCoverImage(crew_id: any): Promise<any> {
        return this.httpClientService.get(`${this.crewsURL}/cover_image`, { crew_id: crew_id })
            .then(response => response.text() as any);   
    }

    updateName(crew: any): Promise<any> {
        return this.httpClientService.post(`${this.crewsURL}/update_name`, crew)
            .then(response => response.json() as any);      
    }

    addMember(crew_id, url): Promise<any> {
        return this.httpClientService.purePost(`${url}`, {crew_id: crew_id})
            .then(response => response.json() as any);      
    }


}
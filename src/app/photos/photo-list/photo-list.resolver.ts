import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IPhoto } from '../IPhoto';
import { PhotoService } from '../service/photo.service';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>>{

    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }

}

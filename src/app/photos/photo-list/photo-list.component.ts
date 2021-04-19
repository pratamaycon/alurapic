import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPhoto } from '../IPhoto';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: IPhoto[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    const userName = this.activatedRoute.snapshot.params.userName;
    console.log(userName);


    this.photoService.listFromUser(userName)
      .subscribe(photos => this.photos = photos)
  }

}

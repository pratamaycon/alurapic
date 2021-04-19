import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { FilterByDescriptionPipe } from './../pipes/filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { LoadButtonComponent } from './load-button/load-button.component';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [PhotoListComponent, PhotosComponent, LoadButtonComponent, FilterByDescriptionPipe, SearchComponent],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule { }

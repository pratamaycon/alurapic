import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  @Input() value: string = '';
  @Output() onTyping = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}

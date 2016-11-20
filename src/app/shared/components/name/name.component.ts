import {Component, Input} from '@angular/core';
import {NameService} from "./name.service";
import {Observable} from "rxjs";
import {Name} from "./name";

@Component({
  selector: 'name',
  templateUrl: './name.component.html',
  providers: [NameService],
  styles: [`.form-control { width: 300px; display: inline; }`]
})
export class NameComponent {
  @Input()
  model: Name;
  searching = false;
  searchFailed = false;

  constructor(private _service: NameService) {}

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._service.search(term)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  formatter = (result: Name) => {
    if(result){
      return result.value;
    }else{
      return '';
    }
  }
}

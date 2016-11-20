import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs";
import {Name} from "./name";


@Injectable()
export class NameService {

  private apiUrl = 'api/names';

  constructor(private http: Http) {
  }

  search(term: string) {
    if (term === '') {
      return Observable.of([]);
    }

    return this.http.get(this.apiUrl)
      .map(response => <Name[]>response.json().data);
  }
}

import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} {
    return {names: this.names};
  }

  private names = [
    {id: 11, value: 'Mr. Nice'},
    {id: 12, value: 'Narco'},
    {id: 13, value: 'Bombasto'},
    {id: 14, value: 'Celeritas'},
    {id: 15, value: 'Magneta'},
    {id: 16, value: 'RubberMan'},
    {id: 17, value: 'Dynama'},
    {id: 18, value: 'Dr IQ'},
    {id: 19, value: 'Magma'},
    {id: 20, value: 'Tornado'}
  ];

}

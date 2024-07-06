import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
    private http: HttpClient = inject(HttpClient);

  constructor() { }

  getStates(){
    return this.http.post("https://countriesnow.space/api/v0.1/countries/states", {"country": "India"});
  }

  getCities(state: string){
    return this.http.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
        "country": "India",
        "state": state
    });
  }
}

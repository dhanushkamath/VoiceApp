import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  LOCATOR_URL: string;
  latitude: number;
  longitude: number;
  radius: number;

  constructor(private http: HttpClient) {



  }

  getNearbyBanks(lati: number, longi: number, radius: number) {
    this.latitude = lati;
    this.longitude = longi;
    this.radius = radius;

    this.LOCATOR_URL = `https://nodebackendteam20-dot-gcloudtutorial-253103.appspot.com/proxy/locator?lati=${this.latitude}&longi=${this.longitude}&radi=${this.radius}`
    console.log(this.LOCATOR_URL)

    return this.http.get<any>(this.LOCATOR_URL)
  }


}

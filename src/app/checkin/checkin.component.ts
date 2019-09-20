import { CheckinService } from './../checkin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  banks: Array<Object>;
  constructor(private checkinService: CheckinService) { }

  ngOnInit() {
    this.checkinService.getNearbyBanks(51.511302, -0.124744, 1).subscribe(data =>{
        var results = data['data'][0]['Brand'][0]['Branch']

        if (results.length !== 1) {
          if (results.length > 6) {
            results = results.slice(0, 6);
          }

          else if (results.length %2 !== 0) {
            results = results.slice(0, results.length - 1);
          }
        }
        this.banks = results;
        console.log(this.banks);
    });
  }
  testMore(i){
    console.log(i)
  }
}

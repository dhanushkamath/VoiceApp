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
        this.banks = data['data'][0]['Brand'][0]['Branch'];
        console.log(this.banks)
    });
  }

}

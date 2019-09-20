import { CheckinService } from './../checkin.service';
import { TransferService } from './../transfer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkinspecific',
  templateUrl: './checkinspecific.component.html',
  styleUrls: ['./checkinspecific.component.css']
})
export class CheckinspecificComponent implements OnInit {

  data: Object;
  bank: Object;
  i: number;
  checkedin: boolean;

  constructor(private transferService: TransferService, private checkinService: CheckinService) {
    var temp = transferService.getData()
    this.i = temp[1]
    this.bank = temp[0]


    if(!this.bank)
    {
      this.checkinService.getNearbyBanks(51.511302, -0.124744, 1).subscribe(data =>{
        var results = data['data'][0]['Brand'][0]['Branch']
        this.bank = results[0];
        this.i = 0;
        this.data = [results[0]];
        console.log(this.bank);
        this.checkedin = true;
    });
    }

  }

  ngOnInit() {

  }

}

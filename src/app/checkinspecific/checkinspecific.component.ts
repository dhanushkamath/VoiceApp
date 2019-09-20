import { SpeechRecognitionService } from './../speech.service';
import { CheckinService } from './../checkin.service';
import { TransferService } from './../transfer-service.service';
import { Component, OnInit } from '@angular/core';
var M = require('materialize-css')

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

  constructor(private transferService: TransferService, private checkinService: CheckinService, private speech: SpeechRecognitionService) {
    var temp = transferService.getData()
    this.i = temp[1]
    this.bank = temp[0]


    if(!this.bank)
    {
      this.checkinService.getNearbyBanks(51.511302, -0.124744, 1).subscribe(data =>{
        var results = data['data'][0]['Brand'][0]['Branch']
        this.bank = results[0];
        var name = results[0].Name;
        this.i = 0;
        this.data = [results[0]];
        console.log(this.bank);
        speech.Speak("We see that you are at our branch in" + name + ". Take a look at the features available here.")
        this.checkedin = true;
    });
    }

  }

  ngOnInit() {
    M.Tabs.init(document.querySelector('.tabs'), []);

  }

}

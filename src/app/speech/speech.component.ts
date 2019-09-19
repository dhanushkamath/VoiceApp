import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech.service';



interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})


export class SpeechComponent implements OnInit {

  mic_status: String = 'mic_off'
  pulse_status: String = ''

  speechData: String;
  speechActive: boolean;

  constructor(private speechRecognitionService: SpeechRecognitionService) {
    this.speechActive = false;
    this.speechData = "";
}

  ngOnInit() {
  }

  ngOnDestroy() {
      this.speechRecognitionService.DestroySpeechObject();
  }

  toggleSpeech(): void {
      this.speechActive = true;

      this.speechRecognitionService.record()
          .subscribe(
          //listener
          (value) => {
              this.speechData = value;
              console.log("Recognition: " + value);
          },
          //errror
          (err) => {
              console.log(err);
              if (err.error == "no-speech") {
                  console.log("--restatring service--");
                  this.toggleSpeech();
              }
          },
          //completion
          () => {
              this.speechActive = false;
              console.log("--complete--");
              this.toggleSpeech();
          });
  }

}


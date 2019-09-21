import { SpeechRecognitionService } from './../speech.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify-executive',
  templateUrl: './notify-executive.component.html',
  styleUrls: ['./notify-executive.component.css']
})
export class NotifyExecutiveComponent implements OnInit {

  constructor(private speech: SpeechRecognitionService) { }

  ngOnInit() {
    this.speech.Speak('Hi. Welcome to VoiceBank! I am Elton. And I shall assist you shortly.')
  }

}

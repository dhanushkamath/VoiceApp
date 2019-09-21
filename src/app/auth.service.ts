import { SpeechRecognitionService } from './speech.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL = 'https://nodebackendteam20-dot-gcloudtutorial-253103.appspot.com/api/login'

  constructor(private http: HttpClient, private router: Router, private speech:SpeechRecognitionService) { }

  loginUser(user) {
    return this.http.post<any>(this.LOGIN_URL, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.speech.Speak("Goodbye.")
    this.router.navigate(['/login'])

  }
}

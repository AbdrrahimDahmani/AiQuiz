import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostPromptService {
  constructor(private httpClient: HttpClient) {}
  getClient(): Observable<any> {
    return this.httpClient.post<any>(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDyRj9Lge6FVUFunTWR3UnOD7Oq-81Z2Uw',
      {
        contents: [
          { parts: [{ text: 'Write a story about a magic backpack' }] },
        ],
      }
    );
  }
}

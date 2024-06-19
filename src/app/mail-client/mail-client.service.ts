import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailClientService {
  private http = inject(HttpClient);
  constructor() { }

  addSubscriber(email: string){
    return this.http.post(environment.BASE_URL, {
        "email": email
    });
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseClientService } from '../database/supabase-client.service';
import { ResendService } from '../mail-client/resend.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  providers: [SupabaseClientService, ResendService],
  templateUrl: './newsletter.component.html',
  styles: ``
})
export class NewsletterComponent {
    private dbClient = inject(SupabaseClientService);
    private emailClient = inject(ResendService);
    email: string = '';

    addNewsLetter(){
        this.dbClient.addNewsletterSubscriber(this.email);
        this.emailClient.sendNewsletterSubscribed(this.email);
    }
}

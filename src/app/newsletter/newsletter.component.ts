import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseClientService } from '../database/supabase-client.service';
import { MailClientService } from '../mail-client/mail-client.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  providers: [SupabaseClientService, MailClientService],
  templateUrl: './newsletter.component.html',
  styles: ``
})
export class NewsletterComponent {
    private dbClient = inject(SupabaseClientService);
    private emailClient = inject(MailClientService);
    email: string = '';

    addNewsLetter(){
        this.emailClient.addSubscriber(this.email).subscribe((data) => {
            console.log(data);
        });
    }
}

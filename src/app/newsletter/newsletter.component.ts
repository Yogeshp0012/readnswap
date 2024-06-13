import { Component, inject } from '@angular/core';
import { SupabaseClientService } from '../database/supabase-client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  providers: [SupabaseClientService],
  templateUrl: './newsletter.component.html',
  styles: ``
})
export class NewsletterComponent {
    private dbClient = inject(SupabaseClientService);
    email: string = '';

    addNewsLetter(){
        this.dbClient.addNewsletterSubscriber("test@gmail.com");
    }
}

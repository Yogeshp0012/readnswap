import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SupabaseClientService {
    private supabase: SupabaseClient;
    constructor() {
        this.supabase = createClient(
            environment.supabaseUrl ?? '',
            environment.supabaseKey ?? ''
        );
    }

    getNewsletterSubscribers() {
        return this.supabase.from('newsletter').select('*');
    }

    addNewsletterSubscriber(email: string) {
        console.log(this.supabase.from('newsletter').insert({ email }));
    }
}

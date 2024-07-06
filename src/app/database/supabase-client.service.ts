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
            environment.SUPABASE_URL ?? '',
            environment.SUPABASE_ANON_KEY ?? ''
        );
    }

    getNewsletterSubscribers() {
        return this.supabase.from('newsletter').select('*');
    }

    addNewsletterSubscriber(email: string) {
        return this.supabase
            .from('newsletter')
            .insert({ email })
            .then((response) => {
                if (response.error) {
                    throw response.error;
                } else {
                    return response.data;
                }
            })
            .then(null, (error) => {
                throw error;
            });
    }
}

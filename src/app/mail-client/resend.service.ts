import { Injectable } from '@angular/core';
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

@Injectable({
    providedIn: 'root'
})
export class ResendService {

    constructor() { }

    async sendNewsletterSubscribed(email: string) {
        const { data, error } = await resend.emails.send({
            from: 'admin@pyogesh.design',
            to: [email],
            subject: 'BookSwap Newsletter: Welcome to the Bookworm Club!',
            html: `
        <p>Dear Swapper,</p>
        <p>Thank you for subscribing to our newsletter!</p>
        <p>You are now part of our community and will receive updates on new books and other important announcements.</p>
        <p>Best regards,</p>
        <p>ReadNSwap Admin</p>
        <img src="readnswap.png" alt="Your Logo">
    `,
        });
    }
}

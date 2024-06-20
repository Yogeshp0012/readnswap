import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MailClientService } from '../mail-client/mail-client.service';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import validateEmail from '../../shared/Utils';

@Component({
    selector: 'app-newsletter',
    standalone: true,
    imports: [FormsModule, CommonModule],
    providers: [MailClientService],
    templateUrl: './newsletter.component.html',
    styleUrl: './newsletter.component.scss',
    animations: [
        trigger('fadeInOut', [
            state('void', style({ opacity: 0 })),
            transition(':enter, :leave', [
                animate(300)
            ])
        ]),
        trigger('slideInOut', [
            state('void', style({ transform: 'translateY(-100%)' })),
            transition(':enter', [
                animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ transform: 'translateY(-100%)' }))
            ])
        ])
    ],
})
export class NewsletterComponent {
    private emailClient = inject(MailClientService);

    title: string = '';
    subtitle: string = '';
    email: string = '';
    openPopup: boolean = false;
    loader: boolean = false;
    invalidEmail: boolean = false;

    constructor() {
        this.title = "Congratulations, you're now a BookSwap Subscriber!";
        this.subtitle = "Thank you for joining our bookish community! You will now receive the latest updates and special offers."

    }

    addNewsLetter() {
        this.title = '';
        this.subtitle = '';
        this.invalidEmail = false;
        if(!validateEmail(this.email)){
            this.invalidEmail = true;
            return;
        }
        this.openPopup = true;
        this.loader  = true;
        this.emailClient.addSubscriber(this.email).subscribe((data: any) => {
            if (data.success) {
                this.title = "Congratulations, you're now a BookSwap Subscriber!";
                this.subtitle = "Thank you for joining our bookish community! You will now receive the latest updates and special offers."
            }
            else if (!data.success) {
                this.title = "You're already part of our bookish community!";
                this.subtitle = "Thank you for your interest in our newsletter! You are already a subscriber, so you will continue to receive updates and special offers."
            }
            this.loader = false;
        });
    }
}

import { Injectable } from '@angular/core';
import { Clerk } from "@clerk/clerk-js";
import { environment } from '../../environments/environment';
import { CLERK_REDIRECT_URL } from '../../shared/routing';

@Injectable({
    providedIn: 'root'
})
export class ClerkService {
    private clerkPubKey: string;
    private clerk: Clerk;
    constructor() {
        this.clerkPubKey = environment.CLERK_PUBLISHABLE_KEY;
        this.clerk = new Clerk(this.clerkPubKey);
    }

    async loadClerk() {
        await this.clerk.load({
        });
    }

    async mountSignIn(signInDiv: HTMLDivElement) {
        this.clerk.mountSignIn(signInDiv, {forceRedirectUrl: CLERK_REDIRECT_URL});
    }

    async mountSignUp(signUpDiv: HTMLDivElement) {
        this.clerk.mountSignUp(signUpDiv,{forceRedirectUrl: CLERK_REDIRECT_URL});
    }

    async unmountSignUp(signUpDiv: HTMLDivElement) {
        this.clerk.unmountSignUp(signUpDiv);
    }
    async unmountSignIn(signInDiv: HTMLDivElement) {
        this.clerk.unmountSignIn(signInDiv);
    }

    userData() {
        return this.clerk.user;
    }

    async logout() {
        await this.clerk.signOut();
    }
}

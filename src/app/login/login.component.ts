import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ClerkService } from '../auth/clerk.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
    private clerk: ClerkService = inject(ClerkService);

    async ngOnInit() {
        await this.clerk.loadClerk();
        let signInDiv: any = document.getElementById("sign-in");
        this.clerk.mountSignIn(signInDiv);
    }

    async ngOnDestroy() {
        let signInDiv: any = document.getElementById("sign-in");
        await this.clerk.unmountSignIn(signInDiv);
    }


}

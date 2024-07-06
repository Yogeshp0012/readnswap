import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ClerkService } from '../auth/clerk.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit, OnDestroy {
    private clerk: ClerkService = inject(ClerkService);
    loader: boolean = true;

    async ngOnInit() {
        this.loader = true;
        await this.clerk.loadClerk();
        let signUpDiv: any = document.getElementById("sign-up");
        await this.clerk.mountSignUp(signUpDiv);
        this.loader = false;
    }

    async ngOnDestroy(){
        let signUpDiv: any = document.getElementById("sign-up");
        this.clerk.unmountSignUp(signUpDiv);
    }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll'
import { ClerkService } from '../auth/clerk.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,NgxPageScrollModule, RouterModule],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent implements OnInit {
    hideMobileMenu = signal(true);
    private clerk: ClerkService = inject(ClerkService);

    toggleMobileMenu() {
        this.hideMobileMenu.set(!this.hideMobileMenu());
    }

    checkIfUserLoggedIn() {
        console.log(this.clerk.userData);
    }

    async ngOnInit(){
        await this.clerk.loadClerk();
        console.log(this.clerk.userData());
    }
}

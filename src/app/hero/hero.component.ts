import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,NgxPageScrollModule],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
    hideMobileMenu = signal(true);

    toggleMobileMenu() {
        this.hideMobileMenu.set(!this.hideMobileMenu());
    }
}

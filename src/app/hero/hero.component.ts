import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
    hideMobileMenu = signal(true);

    toggleMobileMenu() {
        this.hideMobileMenu.set(!this.hideMobileMenu());
    }
}

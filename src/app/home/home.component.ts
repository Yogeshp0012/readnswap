import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterOutlet, CommonModule, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    hideMobileMenu = signal(true);

    toggleMobileMenu() {
        this.hideMobileMenu.set(!this.hideMobileMenu());
    }
}

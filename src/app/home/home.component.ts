import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { PricingComponent } from '../pricing/pricing.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterOutlet, FooterComponent, PricingComponent, NewsletterComponent, HeroComponent, FeaturesComponent,StatsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
}

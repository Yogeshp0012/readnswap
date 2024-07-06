import { Component, OnInit, inject } from '@angular/core';
import { ClerkService } from '../auth/clerk.service';
import { LocationService } from './location.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-onboarding',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './onboarding.component.html',
    styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent implements OnInit {

    private clerk: ClerkService = inject(ClerkService);
    private location: LocationService = inject(LocationService);

    username: string = '';
    email: string = '';
    country: string = '';
    city: string = '';
    state: string = '';
    states: string[] = [];
    cities: string[] = [];

    async ngOnInit() {
        await this.clerk.loadClerk();
        const user = this.clerk.userData();
        if (user) {
            this.username = user.fullName as string;
            this.email = user.primaryEmailAddress?.emailAddress as string;
            this.location.getStates().subscribe((data: any) => {
                this.states = data.data.states.map((state: any) => state.name);
            });
            this.state = "Karnataka";
            this.setCities();
        }
    }

    setCities(){
        this.location.getCities(this.state).subscribe((data: any) => {
            this.cities = data.data;
        });
    }

    logoutUser(){
        this.clerk.logout();
    }
}

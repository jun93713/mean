import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Dojo Mail';
    emails = [
        {
            email: 'bill@gates.com',
            important: true,
            subject: 'New Windows',
            context: 'Windows XI will launch in year 2100',
        },
        {
            email: 'ada@lovelace.com',
            important: true,
            subject: 'Programming',
            context: 'Enchantress of Numbers',
        },
        {
            email: 'john@carmac.com',
            important: false,
            subject: 'Updated Algo',
            context: 'New algorithm for shadow volumes',
        },
        {
            email: 'gabe@newel.com',
            important: false,
            subject: 'HL3!',
            context: 'Just kidding...',
        }
    ]
}

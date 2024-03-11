import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent, IconNames } from '../icon/icon.component';

@Component({
    standalone: true,
    imports: [CommonModule, IconComponent],

    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    socialLinks: { href: string; iconName: IconNames; iconAlt: string }[] = [
        { href: 'insta', iconName: 'instagram', iconAlt: `Instagram d'Olivier Lin` },
        { href: 'fb', iconName: 'facebook', iconAlt: `Facebook d'Olivier Lin` },
        { href: 'yt', iconName: 'youtube', iconAlt: `Youtube d'Olivier Lin` },
    ];
}

import { Component } from '@angular/core';
import { IconNames } from '../../../@shared/components/icon/icon.component';

@Component({
    selector: 'home-introduction',
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss',
})
export class HomeIntroductionComponent {
    socialLinks: { href: string; iconName: IconNames; iconAlt: string }[] = [
        { href: 'insta', iconName: 'instagram_dirty', iconAlt: `Instagram d'Olivier Lin` },
        { href: 'fb', iconName: 'facebook_dirty', iconAlt: `Facebook d'Olivier Lin` },
        { href: 'yt', iconName: 'youtube_dirty', iconAlt: `Youtube d'Olivier Lin` },
    ];
}

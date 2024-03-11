import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent, IconNames } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../link/link.component';
import { MenuModule } from '../menu/menu.module';

@Component({
    standalone: true,
    imports: [RouterModule, CommonModule, LinkComponent, IconComponent, MenuModule],

    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],

    host: {
        role: 'banner',
    },
})
export class HeaderComponent {
    socialLinks: { href: string; iconName: IconNames; iconAlt: string }[] = [
        { href: 'insta', iconName: 'instagram', iconAlt: `Instagram d'Olivier Lin` },
        { href: 'fb', iconName: 'facebook', iconAlt: `Facebook d'Olivier Lin` },
        { href: 'yt', iconName: 'youtube', iconAlt: `Youtube d'Olivier Lin` },
    ];
}

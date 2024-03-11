import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',

    changeDetection: ChangeDetectionStrategy.OnPush,

    host: {
        '[class]': 'name',
    },
})
export class IconComponent {
    @Input({ required: true }) name: IconNames;
    @Input() iconAlt: string;
}

export type IconNames = 'instagram' | 'facebook' | 'youtube' | 'instagram_dirty' | 'facebook_dirty' | 'youtube_dirty';

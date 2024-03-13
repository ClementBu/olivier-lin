import { Component } from '@angular/core';
import { Showreel } from '../../models';

@Component({
    selector: 'showreel-page',
    templateUrl: './showreels-page.component.html',
    styleUrl: './showreels-page.component.scss',
})
export class ShowreelsPageComponent {
    showreels: Showreel[] = [
        {
            title: 'toto',
            description:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipsci velit..."',
            videoSrc: '/assets/videos/landing.mp4',
        },
        {
            title: 'qsd',
            description:
                'aNeque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipsci velit..."ds Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipsci velit..."Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipsci velit..."',
            videoSrc: '/assets/videos/landing.mp4',
        },
        { title: 'dqqdsdq', description: 'contenu court', videoSrc: '/assets/videos/landing.mp4' },
    ];
}

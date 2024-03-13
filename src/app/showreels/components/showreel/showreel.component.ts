import { Component, Input } from '@angular/core';
import { Showreel } from '../../models';

@Component({
    selector: 'showreel',
    templateUrl: './showreel.component.html',
    styleUrl: './showreel.component.scss',
})
export class ShowreelComponent {
    @Input({ required: true }) showreel: Showreel;
}

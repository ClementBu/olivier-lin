import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule],

    selector: 'a[app-button], button[app-button]',
    template: '<ng-content />',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {}

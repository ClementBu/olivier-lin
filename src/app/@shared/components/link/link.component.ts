import { Component, ElementRef, Input } from '@angular/core';

@Component({
    standalone: true,

    selector: 'a[app-link], button[app-link]',
    template: '<ng-content />',
    styleUrl: './link.component.scss',
})
export class LinkComponent {
    @Input() color: 'on-primary' = 'on-primary';

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    public get nativeElement(): HTMLElement {
        return this.elementRef.nativeElement;
    }
}

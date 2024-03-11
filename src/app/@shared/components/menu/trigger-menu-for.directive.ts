import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MenuComponent } from './menu.component';

@Directive({
    selector: '[app-trigger-menu-for]',
})
export class TriggerMenuForDirective implements AfterViewInit {
    @Input({ alias: 'app-trigger-menu-for', required: true }) menu: MenuComponent;
    @Input() gap: number;

    constructor(private _elementRef: ElementRef<HTMLElement>) {}

    ngAfterViewInit(): void {
        this.menu.focusEntered.subscribe(() => this.openMenu());

        this.menu.mouseLeft.subscribe(() => this.closeMenu());
        this.menu.focusLeft.subscribe(() => this.closeMenu());
    }

    @HostListener('focus')
    onClick(): void {
        this.openMenu();
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.openMenu();
    }

    @HostListener('blur')
    onBlur(): void {
        setTimeout(() => {
            if (!this.menu.hasFocus && !this.menu.mouseIsInside) {
                this.menu.close();
            }
        }, 150);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        setTimeout(() => {
            if (!this.menu.mouseIsInside) {
                this.menu.close();
            }
        }, 150);
    }

    @HostListener('window:keydown', ['$event'])
    onKeydown(event: KeyboardEvent): void {
        if (
            (event.key === 'ArrowDown' || event.key === 'ArrowUp') &&
            (document.activeElement === this._elementRef.nativeElement || this.menu.hasFocus)
        ) {
            if (event.key === 'ArrowDown') this.menu.focusNextElement();
            else this.menu.focusPreviousElement();

            event.preventDefault();
        }
    }

    //
    private openMenu(): void {
        this.placeMenu(this.menu.rootNode, this._elementRef.nativeElement);
        this.menu.open();
    }

    private closeMenu(): void {
        this.menu.close();
    }

    private placeMenu(menu: HTMLElement, anchor: HTMLElement): void {
        const menuRect = menu.getBoundingClientRect();
        const anchorRect = anchor.getBoundingClientRect();

        const left = anchorRect.left + anchorRect.width / 2 - menuRect.width / 2;
        const top = anchorRect.bottom + this.gap;

        menu.style.left = `${left}px`;
        menu.style.top = `${top}px`;
    }
}

import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[app-menu-item]',
    host: {
        tabindex: '-1',
    },
})
export class MenuItemDirective {
    @Output() focusEntered = new EventEmitter<void>();
    @Output() focusLeft = new EventEmitter<void>();
    @Output() clicked = new EventEmitter<void>();

    private _hasFocus: boolean;

    constructor(private _elementRef: ElementRef<HTMLElement>) {}

    @HostListener('focus')
    onFocus(): void {
        this.focusEntered.emit();
        this._hasFocus = true;
    }

    @HostListener('blur')
    onBlur(): void {
        this.focusLeft.emit();
        this._hasFocus = false;
    }

    @HostListener('click')
    onClick(): void {
        this.blur();
        this.clicked.emit();
    }

    focus(): void {
        this._elementRef.nativeElement.focus();
        this._hasFocus = true;
        this.focusEntered.emit();
    }

    blur(): void {
        this._elementRef.nativeElement.blur();
        this._hasFocus = false;
        this.focusLeft.emit();
    }

    get hasFocus(): boolean {
        return this._hasFocus;
    }
}

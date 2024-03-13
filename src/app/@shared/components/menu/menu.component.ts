import { animate, state, style, transition, trigger } from '@angular/animations';
import {
    AfterContentInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
    QueryList,
} from '@angular/core';
import { MenuItemDirective } from './menu-item.directive';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',

    exportAs: 'menu',

    animations: [
        trigger('menu', [
            state('closed', style({ opacity: 0, height: 0 })),
            state('opened', style({ opacity: 1, height: '*' })),

            transition('closed <=> opened', animate('300ms ease-out')),
        ]),
    ],

    host: {
        '[@menu]': '_state',
    },
})
export class MenuComponent implements AfterContentInit {
    @ContentChildren(MenuItemDirective, { descendants: true }) menuItems: QueryList<MenuItemDirective>;

    @Output() mouseLeft = new EventEmitter<void>();
    @Output() focusEntered = new EventEmitter<void>();
    @Output() focusLeft = new EventEmitter<void>();

    private _state: 'opened' | 'closed' = 'closed';
    private _mouseIsInside: boolean;

    constructor(private _elementRef: ElementRef<HTMLElement>) {}

    ngAfterContentInit(): void {
        this.menuItems.last.focusEntered.subscribe(() => this.focusEntered.emit());

        this.menuItems.forEach((m, i) => {
            m.focusLeft.subscribe(() => {
                setTimeout(() => {
                    if (!this.hasFocus) {
                        this.focusLeft.emit();
                    }
                }, 50);
            });

            m.clicked.subscribe(() => this.close());
        });
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this._mouseIsInside = true;
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.mouseLeft.emit();
        this._mouseIsInside = false;
    }

    get rootNode(): HTMLElement {
        return this._elementRef.nativeElement;
    }

    get mouseIsInside(): boolean {
        return this._mouseIsInside;
    }

    get hasFocus(): boolean {
        return this.menuItems.some(m => m.hasFocus);
    }

    open(): void {
        this._state = 'opened';
    }

    close(): void {
        this._state = 'closed';
    }

    focusNextElement(): void {
        const indexItemWithFocus = this.menuItems.toArray().findIndex(i => i.hasFocus);

        if (indexItemWithFocus === -1) {
            this.menuItems.get(0).focus();
        } else {
            this.menuItems.get(indexItemWithFocus).blur();

            if (indexItemWithFocus === this.menuItems.length - 1) {
                this.menuItems.get(0).focus();
            } else {
                this.menuItems.get(indexItemWithFocus + 1).focus();
            }
        }
    }

    focusPreviousElement(): void {
        const indexItemWithFocus = this.menuItems.toArray().findIndex(i => i.hasFocus);
        this.menuItems.get(indexItemWithFocus).blur();

        if (indexItemWithFocus === 0) {
            this.menuItems.get(this.menuItems.length - 1).focus();
        } else {
            this.menuItems.get(indexItemWithFocus - 1).focus();
        }
    }
}

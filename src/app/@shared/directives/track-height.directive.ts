import { ChangeDetectorRef, DestroyRef, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[appTrackHeight]',
    standalone: true,
})
export class TrackHeightDirective {
    @Output() heightChanged = new EventEmitter<string>();

    private _resizeObserver$: ResizeObserver;

    constructor(private host: ElementRef<HTMLElement>, private destroyRef: DestroyRef, private cdr: ChangeDetectorRef) {
        this._resizeObserver$ = new ResizeObserver(() =>
            this.heightChanged.emit(`${this.host.nativeElement.clientHeight}px`)
        );
        this._resizeObserver$.observe(this.host.nativeElement);
        this.destroyRef.onDestroy(() => this._resizeObserver$.disconnect());
    }
}

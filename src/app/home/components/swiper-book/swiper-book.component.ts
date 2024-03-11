import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// @TODO: Dépend de la size des slides
const MIN_SLIDES_FOR_LOOP_OPTION = 6;

@Component({
    selector: 'home-swiper-book',
    templateUrl: './swiper-book.component.html',
    styleUrl: './swiper-book.component.scss',
})
export class HomeSwiperBookComponent implements AfterViewInit {
    @ViewChild('swiper', { static: true }) swiper: ElementRef<HTMLDivElement>;

    imagesSrc: string[] = [
        '/assets/images/olivierlin4.jpg',
        '/assets/images/olivierlin5.jpg',
        '/assets/images/olivierlin6.jpg',
    ];

    constructor() {
        if (this.imagesSrc.length < MIN_SLIDES_FOR_LOOP_OPTION) {
            this.imagesSrc = [...this.imagesSrc, ...this.imagesSrc];
        }
    }

    ngAfterViewInit(): void {
        const swiper = new Swiper(this.swiper.nativeElement, {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true,
            initialSlide: Math.floor(this.imagesSrc.length / 2),
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                // when window width is >= 320px
                380: {
                    slidesPerView: 1.25,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1.5,
                },
                // when window width is >= 640px
                540: {
                    slidesPerView: 2,
                },
                700: {
                    slidesPerView: 3,
                },
                //
                900: {
                    slidesPerView: 4,
                },
            },

            modules: [Navigation],
        });
    }
}

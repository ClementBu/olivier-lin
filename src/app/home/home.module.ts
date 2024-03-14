import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeVideoComponent } from './components/video/video.component';
import { IconComponent } from '../@shared/components/icon/icon.component';
import { HomeIntroductionComponent } from './components/introduction/introduction.component';
import { CommonModule } from '@angular/common';
import { HomeSectionBookComponent } from './components/section-book/section-book.component';
import { LinkComponent } from '../@shared/components/link/link.component';
import { HomeSwiperBookComponent } from './components/swiper-book/swiper-book.component';
import { ButtonComponent } from '../@shared/components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSectionContactComponent } from './components/section-contact/section-contact.component';
import { FormContactComponent } from '../@shared/components/form-contact/form-contact.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        IconComponent,
        LinkComponent,
        ButtonComponent,
        FormContactComponent,
    ],
    declarations: [
        HomePageComponent,
        HomeVideoComponent,
        HomeIntroductionComponent,
        HomeSwiperBookComponent,
        HomeSectionBookComponent,
        HomeSectionContactComponent,
    ],
})
export class HomeModule {}

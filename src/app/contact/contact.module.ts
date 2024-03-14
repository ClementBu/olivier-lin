import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormContactComponent } from '../@shared/components/form-contact/form-contact.component';

@NgModule({
    imports: [ContactRoutingModule, FormContactComponent],
    declarations: [ContactPageComponent],
})
export class ContactModule {}

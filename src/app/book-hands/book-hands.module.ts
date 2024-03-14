import { NgModule } from '@angular/core';
import { BookHandsRoutingModule } from './book-hands-routing.module';
import { BookHandsPageComponent } from './pages/book-hands-page/book-hands-page.component';

@NgModule({
    imports: [BookHandsRoutingModule],
    declarations: [BookHandsPageComponent],
})
export class BookHandsModule {}

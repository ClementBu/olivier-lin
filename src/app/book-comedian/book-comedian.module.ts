import { NgModule } from '@angular/core';
import { BookComedianRoutingModule } from './book-comedian-routing.module';
import { BookComedianPageComponent } from './pages/book-comedian-page/book-comedian-page.component';

@NgModule({
    imports: [BookComedianRoutingModule],
    declarations: [BookComedianPageComponent],
})
export class BookComedianModule {}

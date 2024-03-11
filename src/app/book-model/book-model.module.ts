import { NgModule } from '@angular/core';
import { BookModelRoutingModule } from './book-model-routing.module';
import { BookModelPageComponent } from './pages/book-model-page/book-model-page.component';

@NgModule({
    imports: [BookModelRoutingModule],
    declarations: [BookModelPageComponent],
})
export class BookModelModule {}

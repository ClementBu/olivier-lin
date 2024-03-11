import { RouterModule, Routes } from '@angular/router';
import { BookModelPageComponent } from './pages/book-model-page/book-model-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: BookModelPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookModelRoutingModule {}

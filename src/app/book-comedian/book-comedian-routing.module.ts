import { RouterModule, Routes } from '@angular/router';
import { BookComedianPageComponent } from './pages/book-comedian-page/book-comedian-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: BookComedianPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookComedianRoutingModule {}

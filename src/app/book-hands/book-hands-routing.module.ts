import { RouterModule, Routes } from '@angular/router';
import { BookHandsPageComponent } from './pages/book-hands-page/book-hands-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: BookHandsPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookHandsRoutingModule {}

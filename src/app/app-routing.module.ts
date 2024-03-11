import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    {
        path: 'book-comedian',
        loadChildren: () => import('./book-comedian/book-comedian.module').then(m => m.BookComedianModule),
    },

    { path: 'book-model', loadChildren: () => import('./book-model/book-model.module').then(m => m.BookModelModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },

    {
        path: 'book-comedian',
        loadChildren: () => import('./book-comedian/book-comedian.module').then(m => m.BookComedianModule),
    },

    { path: 'book-model', loadChildren: () => import('./book-model/book-model.module').then(m => m.BookModelModule) },

    { path: 'book-hands', loadChildren: () => import('./book-hands/book-hands.module').then(m => m.BookHandsModule) },

    { path: 'showreels', loadChildren: () => import('./showreels/showreels.module').then(m => m.ShowreelsModule) },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

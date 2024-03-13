import { RouterModule, Routes } from '@angular/router';
import { ShowreelsPageComponent } from './pages/showreels-page/showreels-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: ShowreelsPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShowreelsRoutingModule {}

import { NgModule } from '@angular/core';
import { ShowreelsRoutingModule } from './showreels-routing.module';
import { ShowreelsPageComponent } from './pages/showreels-page/showreels-page.component';

@NgModule({
    imports: [ShowreelsRoutingModule],
    declarations: [ShowreelsPageComponent],
})
export class ShowreelsModule {}

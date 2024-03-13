import { NgModule } from '@angular/core';
import { ShowreelsRoutingModule } from './showreels-routing.module';
import { ShowreelsPageComponent } from './pages/showreels-page/showreels-page.component';
import { ShowreelComponent } from './components/showreel/showreel.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, ShowreelsRoutingModule],
    declarations: [ShowreelsPageComponent, ShowreelComponent],
})
export class ShowreelsModule {}

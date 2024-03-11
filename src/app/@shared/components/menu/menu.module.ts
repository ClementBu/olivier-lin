import { NgModule } from '@angular/core';
import { TriggerMenuForDirective } from './trigger-menu-for.directive';
import { MenuComponent } from './menu.component';
import { MenuItemDirective } from './menu-item.directive';

/**
 * @todo Tout à revoir
 */
@NgModule({
    declarations: [MenuItemDirective, TriggerMenuForDirective, MenuComponent],
    exports: [MenuItemDirective, TriggerMenuForDirective, MenuComponent],
})
export class MenuModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './@shared/components/header/header.component';
import { TrackHeightDirective } from './@shared/directives/track-height.directive';
import { FooterComponent } from './@shared/components/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        TrackHeightDirective,
    ],

    declarations: [AppComponent],

    bootstrap: [AppComponent],
})
export class AppModule {}

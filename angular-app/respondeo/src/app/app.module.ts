import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HoofdmenuComponent } from './hoofdmenu/hoofdmenu.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VragenComponent } from './vragen/vragen.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ToolbarComponent, HoofdmenuComponent, VragenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

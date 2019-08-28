import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { SelectorDirective } from './components/selector.directive';
import { ContainDirective } from './components/contain.directive';
import { TabContainerDirective } from './components/tabContainer.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectorDirective,
    ContainDirective,
    TabContainerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

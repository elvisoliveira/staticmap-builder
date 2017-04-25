import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, ContentComponent, SidebarComponent, FilterComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
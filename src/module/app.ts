import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../component/app';
import { ContentComponent } from '../component/content';
import { SidebarComponent } from '../component/sidebar';
import { FilterComponent } from '../component/filter';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, ContentComponent, SidebarComponent, FilterComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
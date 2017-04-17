@ng.core.NgModule({
	imports: [ng.platformBrowser.BrowserModule],
	declarations: [AppComponent, ContentComponent, SidebarComponent, FilterComponent],
	providers: [FilterService],
	bootstrap: [AppComponent]
})
class AppModule {}
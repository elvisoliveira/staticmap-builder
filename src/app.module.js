@ng.core.NgModule({
	imports: [ng.platformBrowser.BrowserModule],
	declarations: [AppComponent, FilterComponent],
	providers: [FilterService],
	bootstrap: [AppComponent]
})
class AppModule {}
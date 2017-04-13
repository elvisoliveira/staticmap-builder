@ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule],
    declarations: [AppComponent, CalendarComponent],
    providers: [CalendarService],
    bootstrap: [AppComponent]
})
class AppModule {}
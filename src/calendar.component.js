@ng.core.Component({
    selector: 'calendar',
    template: `<li *ngFor="let currency of fields">
                    {{currency}}
               </li>`
})
class CalendarComponent {
    constructor(@ng.core.Inject(CalendarService) calendarService) {
        this.fields = calendarService.getData();
    }
}
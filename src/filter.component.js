@ng.core.Component({
	inputs: ['type'],
	selector: 'filter',
	templateUrl: 'templates/filter.component.html',
	styleUrls: ['styles/filter.component.css']
})
class FilterComponent {
	constructor(@ng.core.Inject(FilterService) filterService, @ng.core.Inject(AppService) appService) {
		this.fields = filterService.getData();
		this.shared = appService;
	}
	ngOnInit() {
		this.fieldset = this['fields'][this['type']];
	}
	add(element) {
		this.shared.publishData(element);
	}
}
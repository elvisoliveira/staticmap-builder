@ng.core.Component({
	inputs: ['type'],
	selector: 'filter',
	templateUrl: 'templates/filter.component.html',
	styleUrls: ['styles/filter.component.css']
})
class FilterComponent {
	constructor(@ng.core.Inject(FilterService) filterService, @ng.core.Inject(SharedService) ss) {
		this.fields = filterService.getData();
		this.shared = ss;
	}
	ngOnInit() {
		this.fieldset = this['fields'][this['type']];
		this.shared.publishData(this.fieldset.label);
	}
}
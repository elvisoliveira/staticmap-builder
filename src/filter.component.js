@ng.core.Component({
	inputs: ['type'],
	selector: 'filter',
	templateUrl: 'templates/filter.component.html',
	styleUrls: ['styles/filter.component.css']
})
class FilterComponent {
	constructor(@ng.core.Inject(FilterService) filterService) {
		this.fields = filterService.getData();
	}
	ngOnInit() {
		console.log(this.type);
	}
}

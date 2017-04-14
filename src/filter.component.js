@ng.core.Component({
	selector: 'filter',
	templateUrl: 'templates/filter.component.html',
	styleUrls: ['styles/filter.component.css']
})
class FilterComponent {
	constructor(@ng.core.Inject(FilterService) filterService) {
		this.fields = filterService.getData();
	}
}
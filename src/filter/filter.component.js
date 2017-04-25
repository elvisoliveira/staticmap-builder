import { Component, Inject } from '@angular/core';

import { FilterService } from '../filter/filter.service';
import { AppService } from '../app/app.service'

@Component({
	inputs: ['type'],
	selector: 'filter',
	templateUrl: 'templates/filter.component.html',
	styleUrls: ['styles/filter.component.css'],
	providers: [FilterService]
})
class FilterComponent {
	constructor(@Inject(FilterService) filterService, @Inject(AppService) appService) {
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
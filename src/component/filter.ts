import { Component, Inject } from '@angular/core';

import { FilterService } from '../service/filter';
import { AppService } from '../service/app'

@Component({
	inputs: ['type'],
	selector: 'filter',
	templateUrl: 'src/templates/filter.html',
	styleUrls: ['src/stylesheets/filter.css'],
	providers: [FilterService]
})
export class FilterComponent {
	private fields;
	private shared;
	private fieldset;

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
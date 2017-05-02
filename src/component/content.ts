import { Component, Inject } from '@angular/core';

import { FilterService } from '../service/filter';
import { AppService } from '../service/app'

@Component({
	selector: 'content',
	styleUrls: ['templates/content.css'],
	templateUrl: 'templates/content.html',
	providers: [FilterService]
})
export class ContentComponent {
	private link;
	constructor(@Inject(AppService) app, @Inject(FilterService) filter) {
		let filters = filter.getData();
		let googlel = [];
		for (var sections in filters) {
			let section = filters[sections].data;
			for (var fields in section) {
				let value;
				if(undefined !== section[fields].placeholder) {
					value = section[fields].placeholder;
				}
				if(undefined !== section[fields].data) {
					value = section[fields].data[0].label;
				}
				if(undefined !== value) {
					googlel.push({
						[section[fields].name]: value
					});
				}
			}
		}
		app.publishData("Content...");
		
		// Setup
		this.link = googlel;
	}
}
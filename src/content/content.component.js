import { Component, Inject } from '@angular/core';

import { FilterService } from '../filter/filter.service';
import { AppService } from '../app/app.service'

@Component({
	selector: 'content',
	styleUrls: ['styles/content.component.css'],
	templateUrl: 'templates/content.component.html',
	providers: [FilterService]
})
export class ContentComponent {
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
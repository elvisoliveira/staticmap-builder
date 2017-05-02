import { Component } from '@angular/core';
import { AppService } from '../service/app';

@Component({
	selector: 'app',
	styleUrls: ['templates/app.css'],
	templateUrl: 'templates/app.html',
	providers: [AppService]
})
export class AppComponent {
	constructor() {}
}
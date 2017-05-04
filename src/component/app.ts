import { Component } from '@angular/core';
import { AppService } from '../service/app';

@Component({
	selector: 'app',
	styleUrls: ['src/stylesheets/app.css'],
	templateUrl: 'src/templates/app.html',
	providers: [AppService]
})
export class AppComponent {
	constructor() {}
}
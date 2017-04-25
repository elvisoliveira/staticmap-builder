import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
	selector: 'app',
	styleUrls: ['styles/app.component.css'],
	templateUrl: 'templates/app.component.html',
	providers: [AppService]
})
export class AppComponent {
	constructor() {}
}
@ng.core.Component({
	selector: 'content',
	styleUrls: ['styles/content.component.css'],
	templateUrl: 'templates/content.component.html'
})
class ContentComponent {
	constructor(@ng.core.Inject(AppService) ss) {
		ss.publishData("Content");
	}
}
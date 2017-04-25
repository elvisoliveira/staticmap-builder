(function() {
	var packages = {
		'app': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'rxjs': {
			defaultExtension: 'js'
		}
	};
	var ngPackageNames = [
		'core',
		'common',
		'compiler',
		'platform-browser',
		'platform-browser-dynamic'
	];
	ngPackageNames.forEach(function(package) {
		packages['@angular/' + package] = {
			main: 'bundles/' + package + '.umd.js',
			defaultExtension: 'js'
		};
	});
	var config = {
		map: {
			'app': 'app',
			'@angular': 'node_modules/@angular',
			'rxjs': 'node_modules/rxjs'
		},
		packages: packages
	};
	System.config(config);
})();
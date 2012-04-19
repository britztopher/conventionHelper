Titanium.UI.setBackgroundColor('#ffffff');

var ch = {};
Ti.include( 
	'ui.js'
);

//Use our custom UI constructors to build the app's UI
var tabs = ch.ui.createApplicationTabGroup();
tabs.open();

//Log our current platform to the console
Ti.API.info('Welcome to TiBountyHunter for '+Ti.Platform.osname);
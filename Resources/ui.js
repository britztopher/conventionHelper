(function() {
	//Create sub-namespace
	ch.ui = {};

	ch.ui.createEventsWindow = function() {

		var eventsWin = Ti.UI.createWindow({
			title : L('events')
		});

		var scrollView = Titanium.UI.createScrollView({
			contentWidth:'auto',
			contentHeight:'auto',
			top:0,
			showVerticalScrollIndicator:true,
			showHorizontalScrollIndicator:true
		});
		
		var view = Ti.UI.createView({
			backgroundColor:'#336699',
			borderRadius:10,
			width:300,
			height:2000,
			top:10
		});

		scrollView.add(view);
		
		eventsWin.add(scrollView);
		
		return eventsWin;
	};

	ch.ui.createMoreInfoListener = function(viewObj, _wholeLottaInfo){
				
		viewObj.addEventListener('click', function(){
			Titanium.UI.createAlertDialog({title:'More Info', message: _wholeLottaInfo}).show();	
		});
	};
	
	ch.ui.createInfoWindow = function(){

		var pics = [];
		
		pics.push('/images/joe_dickman.jpeg');
		pics.push('images/doug.jpeg');
		pics.push('images/sharon.jpeg');
		
		var info = [];
		
		info.push(L('joe_info'));
		info.push(L('doug_info'))
		info.push(L('sharon_info'));
		
		
		var fyiWin = Ti.UI.createWindow({
			title : L('fyi'),
			layout: 'horizontal'
		});
		
		
		for(var i=0; i<pics.length; i++){
			
			var imageView = Titanium.UI.createImageView({
				image : pics[i],
				height : '75px',
				width : '75px',
				borderWidth : '2px',
				borderRadius : '4px 4px 4px 4px',
				
			});
			
			ch.ui.createMoreInfoListener(imageView, info[i]);
			
			fyiWin.add(imageView);
		
			var infoLabel = Titanium.UI.createLabel({
				color : '#999',
				text : info[i],
				width : 'auto',
				left: '2px',
				top: '3px',
				height : '75px',
				font : {
					fontSize : 12,
					fontFamily : 'Helvetica Neue'
				}
			});
			
			fyiWin.add(infoLabel);
			
		}

		return fyiWin;

	};

	//Create the main application tab group
	ch.ui.createApplicationTabGroup = function() {

		var tabs = Ti.UI.createTabGroup();

		var eventsWin = ch.ui.createEventsWindow();
		var fyiWin = ch.ui.createInfoWindow();

		ch.fyiTab = Ti.UI.createTab({
			title : L('fyi'),
			window : fyiWin
		});

		ch.eventsTab = Ti.UI.createTab({
			title : L('events'),
			window : eventsWin
		});
		//add tabs to the tab group
		tabs.addTab(ch.eventsTab);
		tabs.addTab(ch.fyiTab);

		return tabs;
	};
	
	
	
})();

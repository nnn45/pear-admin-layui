layui.define(["jquery","layer"], function (exports) {
	var MOD_NAME = 'theme',
	    $ = layui.jquery;

	var theme = {};
	theme.autoHead = false;

	theme.changeTheme = function (target, autoHead) {
		this.autoHead = autoHead;
		const color = localStorage.getItem("theme-color-context");
		this.colorSet(color);
		if (target.frames.length == 0) return;
		for (var i = 0; i < target.frames.length; i++) {
			try {
				if(target.frames[i].layui == undefined) continue;
				target.frames[i].layui.theme.changeTheme(target.frames[i], autoHead);
			}
			catch (error) {
				console.log(error);
			}
		}
	}

	theme.colorSet = function(color) {
		
		let style = '';
		style += '.light-theme .pear-nav-tree .layui-this a:hover,.light-theme .pear-nav-tree .layui-this,.light-theme .pear-nav-tree .layui-this a,.pear-nav-tree .layui-this a,.pear-nav-tree .layui-this{background-color: ' +color + '!important;}';
		style += '.pear-admin .layui-logo .title{color:' + color + '!important;}';
		style += '.pear-frame-title .dot,.pear-tab .layui-this .pear-tab-active{background-color: ' + color +'!important;}';
		style += '.bottom-nav li a:hover{background-color:' + color + '!important;}';
		style += '.pear-admin .layui-header .layui-nav .layui-nav-bar{background-color: ' + color + '!important;}'
		style += '.ball-loader>span,.signal-loader>span {background-color: ' + color + '!important;}';
		style += '.layui-header .layui-nav-child .layui-this a{background-color:' + color +'!important;color:white!important;}';
		style += '#preloader{background-color:' + color + '!important;}';
		style += '.pearone-color .color-content li.layui-this:after, .pearone-color .color-content li:hover:after {border: ' +color + ' 3px solid!important;}';
		style += '.layui-nav .layui-nav-child dd.layui-this a, .layui-nav-child dd.layui-this{background-color:' + color + '!important}';	
		style += '.pear-social-entrance {background-color:' + color + '!important}';
		style += '.pear-admin .pe-collaspe {background-color:' + color + '!important}';
		style += '.layui-fixbar li {background-color:' + color + '!important}';
		if(this.autoHead){
			style += '.pear-admin .layui-header{background-color:' + color + '!important;}.pear-admin .layui-header .layui-nav .layui-nav-item>a{color:white!important;}';
		}
		style += '.pear-btn.pear-btn-primary {background-color:' + color + '!important}';
		style += '.layui-input:focus,.layui-textarea:focus {border-color: '+ color +'!important;box-shadow: 0 0 0 3px rgba(95, 184, 120, 0.2)!important;}'
		style += '.layui-form-checked[lay-skin=primary] i {border-color: '+ color +'!important;background-color: ' + color + ';}'
		style += '.layui-form-onswitch { border-color: ' + color + '; background-color: '+color+';}'
		style += '.layui-form-radio>i:hover, .layui-form-radioed>i {color: ' + color + ';}'
		var colorPane = $("#pear-admin-color");
		if(colorPane.length>0){
			colorPane.html(style);
		}else{
			$("head").append("<style id='pear-admin-color'>"+style+"</style>")
		}
	}

	exports(MOD_NAME, theme);
});
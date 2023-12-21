/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comibmzcaseprd00/zcaseprdfs00/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

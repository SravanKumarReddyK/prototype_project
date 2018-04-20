jQuery.sap.declare("owner.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("owner.Component", {
	metadata: {
		"manifest": "json"
	}
});
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.f.cardsdemo.controller.MinHeight", {

		onFormFactorChange: function () {
			document.getElementsByClassName("sapMPanel")[0].classList.toggle("sapUiSizeCompact");
		}

	});
});
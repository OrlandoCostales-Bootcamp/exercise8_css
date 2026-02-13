sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox",
  "sap/ui/core/UIComponent"
], function (Controller, MessageBox, UIComponent) {
  "use strict";
 
  return Controller.extend("com.ui5.training.exer7css.controller.Page1", {
    onGoPage2: function () {
      UIComponent.getRouterFor(this).navTo("page2");
    },
 
   onShowMsg: function () {
      var oBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

      var sMessage = oBundle.getText("p1Message")
      var sTitle = oBundle.getText("mb1Title")
      MessageBox.information(sMessage, {
        title: sTitle,
        styleClass: "myMsgBox" 
      });
    }
  });
});
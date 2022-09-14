sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent) {
        "use strict";

        return Controller.extend("com.globant.customers.controller.Customers", {
            onInit: function () {

            },

            onPress: function( oControlEvent ) {

                let _customerID = oControlEvent.getSource().getBindingContext().getObject().CustomerID;
                

                UIComponent.getRouterFor(this).navTo("RouteOrders",{
                    CustomerID: _customerID
                });
            }

        });
    });

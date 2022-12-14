sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent, JSONModel) {
        "use strict";

        return Controller.extend("com.globant.customers.controller.Orders", {
            onInit: function () {
               UIComponent.getRouterFor(this).getRoute("RouteOrders").attachPatternMatched(this._readOrders, this);

            },
            
            _readOrders: function (oEvent) {

                var that = this;
                const oModel = this.getOwnerComponent().getModel();
                let _customerID = oEvent.getParameter("arguments").CustomerID;

                let _skey = oModel.createKey( "/Customers", { CustomerID: _customerID } );

                oModel.read( _skey + '/Orders', {
                    success: function (response) {
                        that.getView().setModel( new JSONModel( response.results ), 'Orders' );
                    },

                    error: function(error) {

                    }

                })


            }

        });
    });

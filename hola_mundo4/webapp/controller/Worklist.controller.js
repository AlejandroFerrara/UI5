sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.globant.holamundo4.controller.Worklist", {
            onInit: function () {

                let lista = [];
                lista.push({
                    ID:1,
                    Texto: "Hola 1"
                })
                lista.push({
                    ID:2,
                    Texto: "Hola 2"
                })
                lista.push({
                    ID:3,
                    Texto: "Hola 3"
                })

                this.getView().setModel(new JSONModel(lista), 'Datos');
                this.getView().setModel(new JSONModel({Titulo: 'Vamooooooo Ciclon!!!'}), 'Header')





            }
        });
    });

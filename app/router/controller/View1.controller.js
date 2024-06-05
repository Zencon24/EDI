// working code
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox"
], function (Controller, MessageToast, Fragment, MessageBox) {
    "use strict";

    return Controller.extend("edi.controller.View1", {

        onPressCreate: function () {
            var oView = this.getView();

            // create dialog lazily
            if (!this.byId("uploadDialog")) {
                Fragment.load({
                    id: oView.getId(),
                    name: "edi.view.UploadDialog",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this.byId("uploadDialog").open();
            }
        },

        onCloseDialog: function () {
            this.byId("uploadDialog").close();
        },

        onFileChange: function (oEvent) {
            var oFileUploader = this.byId("fileUploader");
            var oFile = oEvent.getParameter("files")[0];
            // Handle file change event if needed
        },

        onUploadPress: function () {
            var oFileUploader = this.byId("fileUploader");
            oFileUploader.upload();
        },

        onCloseDialog: function () {
            this.byId("uploadDialog").close();
        },

        onPressGenerate: function () {
            try {
                var oTable = this.byId("purchasingDataTable");

                if (!oTable) {
                    console.error("Table is undefined.");
                    return;
                }

                var aSelectedItems = oTable.getSelectedItems();
                if (aSelectedItems.length === 0) {
                    MessageToast.show("Please select at least one item.");
                    return;
                }

                var aUpdates = aSelectedItems.map(function (oSelectedItem) {
                    var oContext = oSelectedItem.getBindingContext();
                    var sEDI_Number = oContext.getProperty("EDI_Number");
                    var iRandomGate_entrys = Math.floor(Math.random() * 9000000000) + 1000000000;

                    return {
                        EDI_Number: sEDI_Number,
                        Gate_entrys: iRandomGate_entrys
                    };
                });

                // Update the backend data
                this.updateGateEntries(aUpdates);

                // Show success message
                MessageToast.show("Gate entries generated successfully.");
            } catch (error) {
                console.error("Error in onPressGenerate:", error);
                MessageToast.show("Failed to generate Gate entries.");
            }
        },

        updateGateEntries: function (aUpdates) {
            var sUrl = "/odata/v4/service/updateGateEntry"; // Adjust the endpoint URL as needed

            $.ajax({
                url: sUrl,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    GateEntryUpdates: aUpdates
                }),
                success: function (response) {
                    console.log("Update success:", response);
                    MessageToast.show("Gate entries updated successfully.");
                },
                error: function (error) {
                    console.error("Update error:", error);
                    MessageToast.show("Failed to update Gate entries.");
                }
            });
        },

        onPresssync: function () {
            console.log("onPresssync triggered.");

            var oTable = this.byId("purchasingDataTable");
            var aSelectedItems = oTable.getSelectedItems();

            if (aSelectedItems.length === 0) {
                MessageBox.error("Please select at least one entry.");
                return;
            }

            var aDataToPost = aSelectedItems.map(function (oItem) {
                var oData = oItem.getBindingContext().getObject();

                // Helper function to truncate strings to 20 characters
                var truncate = function (sValue) {
                    if (sValue) {
                        sValue = sValue.toString();
                        if (sValue.length > 20) {
                            return sValue.substring(0, 20);
                        }
                    }
                    return sValue;
                };

                // Apply truncation to all properties
                return {
                    GateRegistrationNumber: truncate(oData.Gate_entrys),
                    NameofPersonwhoCreated: truncate(null),
                    DateonWhichRecordCreated: truncate(oData.EDI_Date),
                    Entrytime: truncate(null),
                    AccountNumberofVendoror: truncate(oData.Child_Vendor),
                    CustomerNumber: truncate(null),
                    MaterialNumber: truncate(oData.Material),
                    PurchasingDocumentNumber: truncate(oData.Purchasing_Doc),
                    ItemNumberofPurchasingDo: truncate(oData.Item),
                    CompanyCode: truncate(null),
                    Plant: truncate(oData.Plant),
                    StorageLocation: truncate(oData.Stor_Location),
                    Quantity: truncate(oData.EDI_Quantity),
                    BaseUnitofMeasure: truncate(null),
                    QuantityinUnitofMeasure: truncate(null),
                    UnitofMeasureFromDeliver: truncate(null),
                    MaterialDirectionIndicator: truncate(null),
                    ShortText: truncate(oData.Description),
                    ReferenceDocumentNumber: truncate(null),
                    ChallanDate: truncate(oData.Created_on),
                    VehicleNumber: truncate(null),
                    BillingDocument: truncate(null),
                    SequenceNumberofaCheck: truncate(null),
                    PortalTokenNumber: truncate(null),
                    NumberofMaterialDocument: truncate(oData.UL_Counter),
                    MaterialDocumentYear: truncate(oData.Fiscal_Year),
                    Materialbelongingtothecu: truncate(null),
                    NameofRepresentative: truncate(null),
                    VendorName: truncate(oData.Parent_Vendor_Name),
                    CustomerName: truncate(oData.Child_Vendor_Name),
                    MaterialGateEntryCollecti: truncate(null),
                    StatusIndicator: truncate(null),
                    ChangedBy: truncate(oData.Created_by),
                    ChangedDate: truncate(null),
                    UpdateTime: truncate(null),
                    ReasonCode: truncate(null),
                    IteminMaterialDocument: truncate(oData.Item),
                    SingleCharacterIndicator: truncate(null),
                    Name: truncate(null),
                    GateEntryCategory: truncate(null),
                    EDINumber: truncate(oData.EDI_Number),
                    OrderNumber: truncate(null),
                    ConfirmationID: truncate(null)
                };
            });

            this._postSelectedData(aDataToPost);
        },

        _postSelectedData: function (aData) {
            var that = this;

            this.fetchCSRFToken(function (csrfToken) {
                var sUrl = "/ODATA-EDI/YY1_GATE_REG";

                aData.forEach(function (oData, index) {
                    $.ajax({
                        url: sUrl,
                        method: "POST",
                        contentType: "application/json",
                        headers: {
                            "X-CSRF-Token": csrfToken
                        },
                        data: JSON.stringify(oData),
                        success: function () {
                            console.log("Data posted successfully for item " + index);
                            MessageToast.show("Data posted successfully!");
                        },
                        error: function (oError) {
                            console.error("Failed to post data for item " + index + ": " + oError.responseText);
                            MessageBox.error("Failed to post data: " + oError.responseText);
                        }
                    });
                });
            });
        },

        fetchCSRFToken: function (callback) {
            var sUrl = "/ODATA-EDI/YY1_GATE_REG";
            $.ajax({
                url: sUrl,
                method: "HEAD",
                headers: {
                    "X-CSRF-Token": "Fetch"
                },
                success: function (data, textStatus, request) {
                    var csrfToken = request.getResponseHeader("X-CSRF-Token");
                    callback(csrfToken);
                },
                error: function (xhr, textStatus, error) {
                    console.error("Failed to fetch CSRF token:", error);
                }
            });
        }
    });
});


// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/core/Fragment",
//     "sap/m/MessageBox"
// ], function (Controller, MessageToast, Fragment, MessageBox) {
//     "use strict";

//     return Controller.extend("edi.controller.View1", {

//         onPressCreate: function () {
//             console.log("-------inside onPressCreate function-----");

//             var oView = this.getView();
//             Fragment.load({
//                 id: oView.getId(),
//                 name: "edi.view.UploadPopup",
//                 controller: this
//             }).then(function (oFragment) {
//                 oView.addDependent(oFragment);
//                 oFragment.open();
//             });
//         },

//         handleUploadComplete: function (oEvent) {
//             sap.m.MessageToast.show("Upload Complete");
//         },

//         handleUploadPress: function () {
//             var oFileUploader = this.byId("fileUploader");
//             oFileUploader.upload();
//         },

//         onPressGenerate: function () {
//             try {
//                 var oTable = this.byId("purchasingDataTable");

//                 if (!oTable) {
//                     console.error("Table is undefined.");
//                     return;
//                 }

//                 var aSelectedItems = oTable.getSelectedItems();
//                 if (aSelectedItems.length === 0) {
//                     MessageToast.show("Please select at least one item.");
//                     return;
//                 }

//                 var aUpdates = aSelectedItems.map(function (oSelectedItem) {
//                     var oContext = oSelectedItem.getBindingContext();
//                     var sEDI_Number = oContext.getProperty("EDI_Number");
//                     var iRandomGate_entrys = Math.floor(Math.random() * 9000000000) + 1000000000;

//                     return {
//                         EDI_Number: sEDI_Number,
//                         Gate_entrys: iRandomGate_entrys
//                     };
//                 });

//                 // Update the backend data
//                 this.updateGateEntries(aUpdates);

//                 // Show success message
//                 MessageToast.show("Gate entries generated successfully.");
//             } catch (error) {
//                 console.error("Error in onPressGenerate:", error);
//                 MessageToast.show("Failed to generate Gate entries.");
//             }
//         },

//         updateGateEntries: function (aUpdates) {
//             var sUrl = "/odata/v4/service/updateGateEntry"; // Adjust the endpoint URL as needed

//             $.ajax({
//                 url: sUrl,
//                 method: "POST",
//                 contentType: "application/json",
//                 data: JSON.stringify({
//                     GateEntryUpdates: aUpdates
//                 }),
//                 success: function (response) {
//                     console.log("Update success:", response);
//                     MessageToast.show("Gate entries updated successfully.");
//                 },
//                 error: function (error) {
//                     console.error("Update error:", error);
//                     MessageToast.show("Failed to update Gate entries.");
//                 }
//             });
//         },

//         onPresssync: function () {
//             console.log("onPresssync triggered.");

//             var oTable = this.byId("purchasingDataTable");
//             var aSelectedItems = oTable.getSelectedItems();

//             if (aSelectedItems.length === 0) {
//                 MessageBox.error("Please select at least one entry.");
//                 return;
//             }

//             var that = this;

//             this._fetchExistingGateNumbers(function (aExistingNumbers) {
//                 var aDataToPost = aSelectedItems.map(function (oItem) {
//                     var oData = oItem.getBindingContext().getObject();

//                     // Helper function to truncate strings to 20 characters
//                     var truncate = function (sValue) {
//                         if (sValue) {
//                             sValue = sValue.toString();
//                             if (sValue.length > 20) {
//                                 return sValue.substring(0, 20);
//                             }
//                         }
//                         return sValue;
//                     };

//                     // Generate a unique GateRegistrationNumber
//                     var iGateNumber = that._generateUniqueGateNumber(aExistingNumbers);

//                     return {
//                         GateRegistrationNumber: iGateNumber,
//                         NameofPersonwhoCreated: truncate(null),
//                         DateonWhichRecordCreated: truncate(oData.EDI_Date),
//                         Entrytime: truncate(null),
//                         AccountNumberofVendoror: truncate(oData.Child_Vendor),
//                         CustomerNumber: truncate(null),
//                         MaterialNumber: truncate(oData.Material),
//                         PurchasingDocumentNumber: truncate(oData.Purchasing_Doc),
//                         ItemNumberofPurchasingDo: truncate(oData.Item),
//                         CompanyCode: truncate(null),
//                         Plant: truncate(oData.Plant),
//                         StorageLocation: truncate(oData.Stor_Location),
//                         Quantity: truncate(oData.EDI_Quantity),
//                         BaseUnitofMeasure: truncate(null),
//                         QuantityinUnitofMeasure: truncate(null),
//                         UnitofMeasureFromDeliver: truncate(null),
//                         MaterialDirectionIndicator: truncate(null),
//                         ShortText: truncate(oData.Description),
//                         ReferenceDocumentNumber: truncate(null),
//                         ChallanDate: truncate(oData.Created_on),
//                         VehicleNumber: truncate(null),
//                         BillingDocument: truncate(null),
//                         SequenceNumberofaCheck: truncate(null),
//                         PortalTokenNumber: truncate(null),
//                         NumberofMaterialDocument: truncate(oData.UL_Counter),
//                         MaterialDocumentYear: truncate(oData.Fiscal_Year),
//                         Materialbelongingtothecu: truncate(null),
//                         NameofRepresentative: truncate(null),
//                         VendorName: truncate(oData.Parent_Vendor_Name),
//                         CustomerName: truncate(oData.Child_Vendor_Name),
//                         MaterialGateEntryCollecti: truncate(null),
//                         StatusIndicator: truncate(null),
//                         ChangedBy: truncate(oData.Created_by),
//                         ChangedDate: truncate(null),
//                         UpdateTime: truncate(null),
//                         ReasonCode: truncate(null),
//                         IteminMaterialDocument: truncate(oData.Item),
//                         SingleCharacterIndicator: truncate(null),
//                         Name: truncate(null),
//                         GateEntryCategory: truncate(null),
//                         EDINumber: truncate(oData.EDI_Number),
//                         OrderNumber: truncate(null),
//                         ConfirmationID: truncate(null)
//                     };
//                 });

//                 that._postSelectedData(aDataToPost);
//             });
//         },

//         _fetchExistingGateNumbers: function (callback) {
//             var sUrl = "/ODATA-EDI/YY1_GATE_REG";
//             var that = this;

//             $.ajax({
//                 url: sUrl,
//                 method: "GET",
//                 contentType: "application/json",
//                 success: function (response) {
//                     // Store the data in a JSON model
//                     var oModel = new sap.ui.model.json.JSONModel(response.value);
//                     that.getView().setModel(oModel, "gateEntries");

//                     var aExistingNumbers = response.value.map(function (oEntry) {
//                         return parseInt(oEntry.GateRegistrationNumber, 10);
//                     });
//                     callback(aExistingNumbers);
//                 },
//                 error: function (error) {
//                     console.error("Error fetching existing gate numbers:", error);
//                     callback([]);
//                 }
//             });
//         },

//         _generateUniqueGateNumber: function (aExistingNumbers) {
//             var iNextNumber = 1000000;
//             while (aExistingNumbers.includes(iNextNumber)) {
//                 iNextNumber++;
//             }
//             return iNextNumber.toString();
//         },

//         _postSelectedData: function (aData) {
//             var that = this;

//             this.fetchCSRFToken(function (csrfToken) {
//                 var sUrl = "/ODATA-EDI/YY1_GATE_REG";

//                 aData.forEach(function (oData, index) {
//                     $.ajax({
//                         url: sUrl,
//                         method: "POST",
//                         contentType: "application/json",
//                         headers: {
//                             "X-CSRF-Token": csrfToken
//                         },
//                         data: JSON.stringify(oData),
//                         success: function () {
//                             console.log("Data posted successfully for item " + index);
//                             MessageToast.show("Data posted successfully!");
//                         },
//                         error: function (oError) {
//                             console.error("Failed to post data for item " + index + ": " + oError.responseText);
//                             MessageBox.error("Failed to post data: " + oError.responseText);
//                         }
//                     });
//                 });
//             });
//         },

//         fetchCSRFToken: function (callback) {
//             var sUrl = "/ODATA-EDI/YY1_GATE_REG";
//             $.ajax({
//                 url: sUrl,
//                 method: "HEAD",
//                 headers: {
//                     "X-CSRF-Token": "Fetch"
//                 },
//                 success: function (data, textStatus, request) {
//                     var csrfToken = request.getResponseHeader("X-CSRF-Token");
//                     callback(csrfToken);
//                 },
//                 error: function (xhr, textStatus, error) {
//                     console.error("Failed to fetch CSRF token:", error);
//                 }
//             });
//         }
//     });
// });


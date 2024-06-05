// // sap.ui.define([
// //     "sap/ui/core/mvc/Controller",
// //     "sap/m/MessageToast"
// // ], function(Controller, MessageToast) {
// //     "use strict";

// //     return Controller.extend("edi.controller.View1", {
// //         onPressGenerate: function() {
// //             try {
// //                 var oTable = this.byId("purchasingDataTable");
// //                 if (!oTable) {
// //                     console.error("Table is undefined.");
// //                     return;
// //                 }

// //                 var aSelectedItems = oTable.getSelectedItems();
// //                 if (aSelectedItems.length === 0) {
// //                     MessageToast.show("Please select at least one item.");
// //                     return;
// //                 }

// //                 // Loop through the selected items
// //                 aSelectedItems.forEach(function(oSelectedItem) {
// //                     var oContext = oSelectedItem.getBindingContext();
// //                     var sPath = oContext.getPath();

// //                     console.log(sPath);

// //                     var sEDI_Number = oContext.getProperty("EDI_Number");
// //                     var iRandomGate_entrys = Math.floor(Math.random() * 9000000000) + 1000000000;

// //                     console.log("EDI_Number:", sEDI_Number);
// //                     console.log("Random Gate_entrys:", iRandomGate_entrys);

// //                     // Update the "Gate_entrys" property in the model using binding
// //                     // oContext.getModel().setProperty(sPath + "/Gate_entrys", iRandomGate_entrys);

// //                     console.log(sPath + "ve" + "/Gate_entrys", iRandomGate_entrys)
// //                 });

// //                 // Submit changes to the backend

// //                 update(sPath, aSelectedItems, mParameters?);

// //                 // oTable.getModel().submitChanges({
// //                 //     success: function() {
// //                 //         MessageToast.show("Gate entries generated successfully.");
// //                 //     },
// //                 //     error: function(error) {
// //                 //         console.error("Error in onPressGenerate:", error);
// //                 //         MessageToast.show("Failed to generate Gate entries.");
// //                 //     }
// //                 // });
// //             } catch (error) {
// //                 console.error("Error in onPressGenerate:", error);
// //                 MessageToast.show("Failed to generate Gate entries.");
// //             }
// //         }
// //     });
// // });


// // sap.ui.define([
// //     "sap/ui/core/mvc/Controller",
// //     "sap/m/MessageToast"
// // ], function(Controller, MessageToast) {
// //     "use strict";

// //     return Controller.extend("edi.controller.View1", {
// //         onPressGenerate: function() {
// //             try {
// //                 var oTable = this.byId("purchasingDataTable");
// //                 if (!oTable) {
// //                     console.error("Table is undefined.");
// //                     return;
// //                 }

// //                 var aSelectedItems = oTable.getSelectedItems();
// //                 if (aSelectedItems.length === 0) {
// //                     MessageToast.show("Please select at least one item.");
// //                     return;
// //                 }

// //                 // Loop through the selected items
// //                 aSelectedItems.forEach(function(oSelectedItem) {
// //                     var oContext = oSelectedItem.getBindingContext();
// //                     var sPath = oContext.getPath();
// //                     var url = "/odata/v4/service/purchasingdata"
// //                     console.log(sPath);

// //                     var sEDI_Number = oContext.getProperty("EDI_Number");
// //                     var iRandomGate_entrys = Math.floor(Math.random() * 9000000000) + 1000000000;

// //                     console.log("EDI_Number:", sEDI_Number);
// //                     console.log("Random Gate_entrys:", iRandomGate_entrys);

// //                     // Update the "Gate_entrys" property in the model using binding
// //                     // Uncomment this line when your model and binding are set up properly
// //                     // oContext.getModel().setProperty(sPath + "/Gate_entrys", iRandomGate_entrys);

// //                     // Update the backend data
// //                     this.update(url, { Gate_entrys: iRandomGate_entrys });

// //                     console.log(url, { Gate_entrys: iRandomGate_entrys })

// //                 }, this);

                

// //                 // Show success message
// //                 MessageToast.show("Gate entries generated successfully.");
// //             } catch (error) {
// //                 console.error("Error in onPressGenerate:", error);
// //                 MessageToast.show("Failed to generate Gate entries.");
// //             }
// //         },

// //         update: function(endpoint, data) {
// //             // Assume this function sends a request to the backend with the provided data
// //             // You can implement it according to your framework or library
// //             // For example, using jQuery.ajax or Fetch API
// //             // jQuery.ajax({
// //             //     url: endpoint,
// //             //     method: "PUT",
// //             //     contentType: "application/json",
// //             //     data: JSON.stringify(data),
// //             //     success: function(response) {
// //             //         console.log("Update success:", response);
// //             //     },
// //             //     error: function(error) {
// //             //         console.error("Update error:", error);
// //             //     }
// //             // });
// //             console.log("Updating data:", data);
// //         }
// //     });
// // });



// // // sap.ui.define([
// // //     "sap/ui/core/mvc/Controller",
// // //     "sap/m/MessageToast"
// // // ], function(Controller, MessageToast) {
// // //     "use strict";

// // //     return Controller.extend("edi.controller.View1", {
// // //         onPressGenerate: function() {
// // //             try {
// // //                 var oTable = this.byId("purchasingDataTable");
// // //                 if (!oTable) {
// // //                     console.error("Table is undefined.");
// // //                     return;
// // //                 }

// // //                 var aSelectedItems = oTable.getSelectedItems();
// // //                 if (aSelectedItems.length === 0) {
// // //                     MessageToast.show("Please select at least one item.");
// // //                     return;
// // //                 }

// // //                 // Loop through the selected items
// // //                 aSelectedItems.forEach(function(oSelectedItem) {
// // //                     var oContext = oSelectedItem.getBindingContext();
// // //                     var sPath = oContext.getPath();

// // //                     console.log(sPath);

// // //                     var sEDI_Number = oContext.getProperty("EDI_Number");
// // //                     var iRandomGate_entrys = Math.floor(Math.random() * 9000000000) + 1000000000;

// // //                     console.log("EDI_Number:", sEDI_Number);
// // //                     console.log("Random Gate_entrys:", iRandomGate_entrys);

// // //                     // Update the backend data
// // //                     this.update(sPath, { Gate_entrys: iRandomGate_entrys });

// // //                     console.log("Updated Gate_entrys for entity:", sEDI_Number, "with value:", iRandomGate_entrys);
// // //                 }, this);

// // //                 // Show success message
// // //                 MessageToast.show("Gate entries generated successfully.");
// // //             } catch (error) {
// // //                 console.error("Error in onPressGenerate:", error);
// // //                 MessageToast.show("Failed to generate Gate entries.");
// // //             }
// // //         },

// // //         update: function(sPath, data) {
// // //             // Construct the URL for updating the specific entity
// // //             var url = "/odata/v4/service/purchasingdata(" + sPath + ")";
        
// // //             // Assume this function sends a request to the backend with the provided data
// // //             // You can implement it according to your framework or library
// // //             // For example, using jQuery.ajax or Fetch API
// // //             jQuery.ajax({
// // //                 url: url,
// // //                 method: "PATCH", // or "PUT" depending on your backend API
// // //                 contentType: "application/json",
// // //                 data: JSON.stringify(data),
// // //                 success: function(response) {
// // //                     console.log("Update success:", response);
// // //                 },
// // //                 error: function(error) {
// // //                     console.error("Update error:", error);
// // //                 }
// // //             });
// // //             console.log("Updating data at URL:", url, "with payload:", data);
// // //         }
// // //     });
// // // });  



// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
// ], function(Controller, MessageToast) {
//     "use strict";

//     return Controller.extend("edi.controller.View1", {
//         onPressGenerate: function() {
//             try {
//                 var oTable = this.byId("purchasingDataTable");

//                 console.log(oTable)
//                 if (!oTable) {
//                     console.error("Table is undefined.");
//                     return;
//                 }

//                 var aSelectedItems = oTable.getSelectedItems();
//                 if (aSelectedItems.length === 0) {
//                     MessageToast.show("Please select at least one item.");
//                     return;
//                 }

//                 var aUpdates = aSelectedItems.map(function(oSelectedItem) {
//                     var oContext = oSelectedItem.getBindingContext();
//                     var sEDI_Number = oContext.getProperty("EDI_Number");
//                     var iRandomGate_entrys = Math.floor(Math.random() * 9000000000) + 1000000000;

//                     console.log(sEDI_Number)
                    
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

//         updateGateEntries: function(aUpdates) {
//             var sUrl = "/odata/v4/service/updateGateEntry"; // Adjust the endpoint URL as needed

//             $.ajax({
//                 url: sUrl,
//                 method: "POST",
//                 contentType: "application/json",
//                 data: JSON.stringify({
//                     GateEntryUpdates: aUpdates
//                 }),
//                 success: function(response) {
//                     console.log("Update success:", response);
//                     MessageToast.show("Gate entries updated successfully.");
//                 },
//                 error: function(error) {
//                     console.error("Update error:", error);
//                     MessageToast.show("Failed to update Gate entries.");
//                 }
//             });
//         }
//     });
// });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox"
], function (Controller, MessageToast, Fragment, MessageBox) {
    "use strict";

    return Controller.extend("edi.controller.View1", {

        onPressCreate: function () {
            console.log("-------inside onPressCreate function-----");

            var oView = this.getView();
            Fragment.load({
                id: oView.getId(),
                name: "edi.view.UploadPopup",
                controller: this
            }).then(function (oFragment) {
                oView.addDependent(oFragment);
                oFragment.open();
            });
        },

        handleUploadComplete: function (oEvent) {
            sap.m.MessageToast.show("Upload Complete");
        },

        handleUploadPress: function () {
            var oFileUploader = this.byId("fileUploader");
            oFileUploader.upload();
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

                return {
                    GateRegistrationNumber: oData.Gate_entrys || null,
                    NameofPersonwhoCreated: null,
                    DateonWhichRecordCreated: oData.EDI_Date || null,
                    Entrytime: null,
                    AccountNumberofVendoror: oData.Child_Vendor || null,
                    CustomerNumber: null,
                    MaterialNumber: oData.Material || null,
                    PurchasingDocumentNumber: oData.Purchasing_Doc || null,
                    ItemNumberofPurchasingDo: oData.Item || null,
                    CompanyCode: null,
                    Plant: oData.Plant || null,
                    StorageLocation: oData.Stor_Location || null,
                    Quantity: oData.EDI_Quantity || null,
                    BaseUnitofMeasure: null,
                    QuantityinUnitofMeasure: null,
                    UnitofMeasureFromDeliver: null,
                    MaterialDirectionIndicator: null,
                    ShortText: oData.Description || null,
                    ReferenceDocumentNumber: null,
                    ChallanDate: oData.Created_on || null,
                    VehicleNumber: null,
                    BillingDocument: null,
                    SequenceNumberofaCheck: null,
                    PortalTokenNumber: null,
                    NumberofMaterialDocument: oData.UL_Counter || null,
                    MaterialDocumentYear: oData.Fiscal_Year || null,
                    Materialbelongingtothecu: null,
                    NameofRepresentative: null,
                    VendorName: oData.Parent_Vendor_Name || null,
                    CustomerName: oData.Child_Vendor_Name || null,
                    MaterialGateEntryCollecti: null,
                    StatusIndicator: null,
                    ChangedBy: oData.Created_by || null,
                    ChangedDate: null,
                    UpdateTime: null,
                    ReasonCode: null,
                    IteminMaterialDocument: oData.Item || null,
                    SingleCharacterIndicator: null,
                    Name: null,
                    GateEntryCategory: null,
                    EDINumber: oData.EDI_Number || null,
                    OrderNumber: null,
                    ConfirmationID: null
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

using GATE_ENTRY from '../db/PurchaseDocument';

service service {
    entity purchasingdata as projection on GATE_ENTRY.PurchaseDocument;
  
    action updateGateEntry(GateEntryUpdates: many {
        EDI_Number: Integer;
        Gate_entrys: Integer;
    }) returns Boolean;
}
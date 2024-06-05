namespace GATE_ENTRY;

entity PurchaseDocument
{
    UL_Counter : String(20);
    Purchasing_Doc : String(20);
    Item : String(10);
    key EDI_Number : Integer;
    Fiscal_Year : String(20);
    EDI_Date : Date;
    Plant : String(10);
    Stor_Location : String(10);
    Material : String(20);
    Description : String(255);
    Child_Vendor : String(20);
    Child_Vendor_Name : String(255);
    Parent_Vendor : String(20);
    Parent_Vendor_Name : String(255);
    Invoice_Number : String(20);
    Invoice_Date : Date;
    EDI_Quantity : Decimal(15,3);
    UL_Qty_Receipt_Qty : Decimal(15,3);
    GR : String(20);
    GR_Year : String(20);
    Debit_Note : String(20);
    Debit_Note_F_Year : Integer;
    Total_Debit_Note_Value : Decimal(15,2);
    Created_by : String(20);
    Created_on : Date;
    Part_2 : String(20);
    Part_2_Excise_FI_Doc : String(20);
    Gate_entrys : Integer;
}

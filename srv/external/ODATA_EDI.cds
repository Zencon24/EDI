/* checksum : f4977168f25bddc5488169c3caed4430 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service ODATA_EDI {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.addressable : 'false'
@sap.content.version : '1'
@sap.label : 'User'
entity ODATA_EDI.P_Scbo_User {
  @sap.display.format : 'UpperCase'
  @sap.label : 'User'
  @sap.quickinfo : 'User Name in User Master Record'
  key name : String(12) not null;
  @sap.label : 'Description'
  @sap.quickinfo : 'Description of the Technical User Account'
  description : String(80);
};

@cds.external : true
@cds.persistence.skip : true
@sap.searchable : 'true'
@sap.content.version : '1'
@sap.label : 'GATE_REG'
entity ODATA_EDI.YY1_GATE_REG {
  @sap.label : 'UUID'
  @sap.quickinfo : '16 Byte UUID in 16 Bytes (Raw Format)'
  key SAP_UUID : UUID not null;
  @sap.label : 'ZRGNO'
  ZRGNO : String(20);
  @sap.label : 'ERNAM'
  ERNAM : String(20);
  @sap.label : 'ERDAT'
  ERDAT : String(20);
  @sap.label : 'ERZET'
  ERZET : String(20);
  @sap.label : 'LIFNR'
  LIFNR : String(20);
  @sap.label : 'KUNNR'
  KUNNR : String(20);
  @sap.label : 'MATNR'
  MATNR : String(20);
  @sap.label : 'EBELN'
  EBELN : String(20);
  @sap.label : 'EBELP'
  EBELP : String(20);
  @sap.label : 'BUKRS'
  BUKRS : String(20);
  @sap.label : 'WERKS'
  WERKS : String(20);
  @sap.label : 'LGORT'
  LGORT : String(20);
  @sap.label : 'MENGE'
  MENGE : String(20);
  @sap.label : 'MEINS'
  MEINS : String(20);
  @sap.label : 'LSMNG'
  LSMNG : String(20);
  @sap.label : 'LSMEH'
  LSMEH : String(20);
  @sap.label : 'ZMDIR'
  ZMDIR : String(20);
  @sap.label : 'TXZ01'
  TXZ01 : String(20);
  @sap.label : 'XBLNR'
  XBLNR : String(20);
  @sap.label : 'ZXDAT'
  ZXDAT : String(20);
  @sap.label : 'ZCARR'
  ZCARR : String(20);
  @sap.label : 'VBELN'
  VBELN : String(20);
  @sap.label : 'ZGENT'
  ZGENT : String(20);
  @sap.label : 'ZSCPN'
  ZSCPN : String(20);
  @sap.label : 'MBLNR'
  MBLNR : String(20);
  @sap.label : 'MJAHR'
  MJAHR : String(20);
  @sap.label : 'KDMAT'
  KDMAT : String(20);
  @sap.label : 'LFAID'
  LFAID : String(20);
  @sap.label : 'VNAME'
  VNAME : String(20);
  @sap.label : 'CNAME'
  CNAME : String(20);
  @sap.label : 'ZCOLN'
  ZCOLN : String(20);
  @sap.label : 'ZSTAT'
  ZSTAT : String(20);
  @sap.label : 'ZCUSR'
  ZCUSR : String(20);
  @sap.label : 'ZCDAT'
  ZCDAT : String(20);
  @sap.label : 'ZUPTM'
  ZUPTM : String(20);
  @sap.label : 'GRUND'
  GRUND : String(20);
  @sap.label : 'ZEILE'
  ZEILE : String(20);
  @sap.label : 'ZDINV'
  ZDINV : String(20);
  @sap.label : 'ZTEXT'
  ZTEXT : String(20);
  @sap.label : 'ZGCAT'
  ZGCAT : String(20);
  @sap.label : 'ZEDIN'
  ZEDIN : String(20);
  @sap.label : 'AUFNR'
  AUFNR : String(20);
  @sap.label : 'ZCONF'
  ZCONF : String(20);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Created On'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  SAP_CreatedDateTime : Timestamp;
  @sap.display.format : 'UpperCase'
  @sap.text : 'SAP_CreatedByUser_Text'
  @sap.label : 'Created By'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  SAP_CreatedByUser : String(12);
  @sap.label : 'Description'
  @sap.quickinfo : 'Description of the Technical User Account'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  SAP_CreatedByUser_Text : String(80);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Last Changed On'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  SAP_LastChangedDateTime : Timestamp;
  @sap.display.format : 'UpperCase'
  @sap.text : 'SAP_LastChangedByUser_Text'
  @sap.label : 'Last Changed By'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  SAP_LastChangedByUser : String(12);
  @sap.label : 'Description'
  @sap.quickinfo : 'Description of the Technical User Account'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  SAP_LastChangedByUser_Text : String(80);
  @cds.ambiguous : 'missing on condition?'
  to_SAPSysAdminDataChangeUser : Association to ODATA_EDI.P_Scbo_User {  };
  @cds.ambiguous : 'missing on condition?'
  to_SAPSysAdminDataCreateUser : Association to ODATA_EDI.P_Scbo_User {  };
};

@cds.external : true
action ODATA_EDI.YY1_GATE_REGSap_upsert(
  @sap.label : 'Text of length 20'
  ZRGNO : String(20),
  @sap.label : 'Text of length 20'
  ERNAM : String(20),
  @sap.label : 'Text of length 20'
  ERDAT : String(20),
  @sap.label : 'Text of length 20'
  ERZET : String(20),
  @sap.label : 'Text of length 20'
  LIFNR : String(20),
  @sap.label : 'Text of length 20'
  KUNNR : String(20),
  @sap.label : 'Text of length 20'
  MATNR : String(20),
  @sap.label : 'Text of length 20'
  EBELN : String(20),
  @sap.label : 'Text of length 20'
  EBELP : String(20),
  @sap.label : 'Text of length 20'
  BUKRS : String(20),
  @sap.label : 'Text of length 20'
  WERKS : String(20),
  @sap.label : 'Text of length 20'
  LGORT : String(20),
  @sap.label : 'Text of length 20'
  MENGE : String(20),
  @sap.label : 'Text of length 20'
  MEINS : String(20),
  @sap.label : 'Text of length 20'
  LSMNG : String(20),
  @sap.label : 'Text of length 20'
  LSMEH : String(20),
  @sap.label : 'Text of length 20'
  ZMDIR : String(20),
  @sap.label : 'Text of length 20'
  TXZ01 : String(20),
  @sap.label : 'Text of length 20'
  XBLNR : String(20),
  @sap.label : 'Text of length 20'
  ZXDAT : String(20),
  @sap.label : 'Text of length 20'
  ZCARR : String(20),
  @sap.label : 'Text of length 20'
  VBELN : String(20),
  @sap.label : 'Text of length 20'
  ZGENT : String(20),
  @sap.label : 'Text of length 20'
  ZSCPN : String(20),
  @sap.label : 'Text of length 20'
  MBLNR : String(20),
  @sap.label : 'Text of length 20'
  MJAHR : String(20),
  @sap.label : 'Text of length 20'
  KDMAT : String(20),
  @sap.label : 'Text of length 20'
  LFAID : String(20),
  @sap.label : 'Text of length 20'
  VNAME : String(20),
  @sap.label : 'Text of length 20'
  CNAME : String(20),
  @sap.label : 'Text of length 20'
  ZCOLN : String(20),
  @sap.label : 'Text of length 20'
  ZSTAT : String(20),
  @sap.label : 'Text of length 20'
  ZCUSR : String(20),
  @sap.label : 'Text of length 20'
  ZCDAT : String(20),
  @sap.label : 'Text of length 20'
  ZUPTM : String(20),
  @sap.label : 'Text of length 20'
  GRUND : String(20),
  @sap.label : 'Text of length 20'
  ZEILE : String(20),
  @sap.label : 'Text of length 20'
  ZDINV : String(20),
  @sap.label : 'Text of length 20'
  ZTEXT : String(20),
  @sap.label : 'Text of length 20'
  ZGCAT : String(20),
  @sap.label : 'Text of length 20'
  ZEDIN : String(20),
  @sap.label : 'Text of length 20'
  AUFNR : String(20),
  @sap.label : 'Text of length 20'
  ZCONF : String(20)
) returns ODATA_EDI.YY1_GATE_REG;


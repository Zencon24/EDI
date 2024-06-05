const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
  const { PurchaseDocument } = this.entities;

  this.on('updateGateEntry', async (req) => {
    const { GateEntryUpdates } = req.data;

    for (const update of GateEntryUpdates) {
      await UPDATE(PurchaseDocument)
        .set({ Gate_entrys: update.Gate_entrys })
        .where({ EDI_Number: update.EDI_Number });
    }

    return true;
  });
});

const { GoogleSpreadsheet } = require('google-spreadsheet');

async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet('1ISwh61ksLiR29SU_N1Nv7lihsyz2QJCNzVSySQLPch4');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo(); // loads document properties and worksheets

  console.log(`From spread-sheet-connect.js\ndoc.title:\n${doc.title}`);

  return doc;
}

module.exports = accessSpreadsheet;

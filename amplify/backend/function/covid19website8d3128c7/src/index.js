const Airtable = require('airtable');
const updateAirtable = require('./update-airtable')

exports.handler = function(event) {
  console.log(JSON.stringify(event, null, 2));
  return updateAirtable({ Airtable, env: process.env, event })
};

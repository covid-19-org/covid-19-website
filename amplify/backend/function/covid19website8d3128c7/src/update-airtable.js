module.exports = ({ Airtable, env, event }) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE } = env;
  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

  const airtableRecords = event.Records.map((record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    const { fullName, email } = record.dynamodb.NewImage;
    
    return { fields: { fullName: fullName.S, email: email.S } }
  });

  return base(AIRTABLE_TABLE).create(airtableRecords)
    .then((airtableReturnedRecords) => {
      console.log({ airtableReturnedRecords });
      return airtableReturnedRecords;
    });
}
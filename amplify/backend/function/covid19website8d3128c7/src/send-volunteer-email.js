module.exports = ({ SES, event }) => {
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    const params = {
      Destination: {
        ToAddresses: ['hello@keithbro.com'],
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          }
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: 'Test Email'
      },
      Source: 'noreply@code4covid.org'
    };

    const sendEmailPromise = new SES().sendEmail(params).promise();

    return sendEmailPromise.then((data) => {
      console.log(data.MessageId);
      return data;
    })
  });
}
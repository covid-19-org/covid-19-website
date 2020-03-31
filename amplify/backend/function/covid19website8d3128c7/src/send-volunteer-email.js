module.exports = ({ AWS, event }) => {
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    const { fullName, email } = record.dynamodb.NewImage;

    const params = {
      Destination: {
        ToAddresses: ['hello@keithbro.com'],
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Name: ${fullName.S}\nEmail: ${email.S}`,
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "code4covid - New Volunteer"
        },
      },
      Source: 'noreply@code4covid.org'
    };

    AWS.config.update({region: 'eu-west-1'});
    const sendEmailPromise = new AWS.SES().sendEmail(params).promise();

    return sendEmailPromise.then((data) => {
      console.log(data.MessageId);
      return data;
    })
  });
}